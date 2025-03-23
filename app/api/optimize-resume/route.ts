import { getAuth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = getAuth();
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { jobTitle, company, jobDescription } = body;

    if (!jobTitle || !company || !jobDescription) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Get the user's resume from the database
    const resume = await prisma.resume.findFirst({
      where: {
        userId,
        jobTitle,
        company,
      },
    });

    if (!resume) {
      return new NextResponse("Resume not found", { status: 404 });
    }

    // Generate optimization suggestions using OpenAI
    const prompt = `
      You are an expert resume optimizer. Given the following resume information and job description,
      provide specific suggestions to optimize the resume for this job opportunity.
      Focus on:
      1. Matching keywords and skills
      2. Highlighting relevant experience
      3. Quantifying achievements
      4. Maintaining professional tone

      Resume Information:
      ${resume.content}

      Job Description:
      ${jobDescription}

      Job Title: ${jobTitle}
      Company: ${company}

      Please provide the optimized resume content:
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are an expert resume optimizer that helps tailor resumes to specific job descriptions.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const optimizedContent = completion.choices[0].message.content;

    // Update the resume with optimized content
    await prisma.resume.update({
      where: {
        id: resume.id,
      },
      data: {
        optimized: optimizedContent,
      },
    });

    return NextResponse.json({ optimized: optimizedContent });
  } catch (error) {
    console.error("[RESUME_OPTIMIZATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 