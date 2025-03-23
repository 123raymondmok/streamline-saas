"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoverLetterOptimizer() {
  const [resumeText, setResumeText] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [optimizedCoverLetter, setOptimizedCoverLetter] = useState("")
  const [isOptimizing, setIsOptimizing] = useState(false)

  const handleOptimize = () => {
    if (!resumeText || !jobDescription || !companyName) return

    setIsOptimizing(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // This is where you would normally call an API to generate the cover letter
      const optimized = generateCoverLetter(resumeText, jobDescription, companyName)
      setOptimizedCoverLetter(optimized)
      setIsOptimizing(false)
    }, 2000)
  }

  // This is a placeholder function that would be replaced with actual AI generation
  const generateCoverLetter = (resume: string, jobDesc: string, company: string) => {
    // In a real application, this would be an AI-powered function
    // For demo purposes, we'll create a simple cover letter template

    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const skills = ["communication", "leadership", "teamwork", "problem-solving", "time management"]
    const jobSkills = skills.filter((skill) => jobDesc.toLowerCase().includes(skill))

    return `${date}

Dear Hiring Manager,

I am writing to express my interest in the position at ${company}. With my background and experience, I believe I would be a valuable addition to your team.

Based on the job description, I understand you're looking for someone with skills in ${jobSkills.join(", ")}. Throughout my career, I have developed and refined these skills through various projects and roles.

[Specific examples from resume would be extracted and highlighted here in a real application]

I am particularly excited about the opportunity to join ${company} because of your reputation for innovation and excellence in the industry. I am confident that my skills and experience align well with what you're looking for in this role.

I would welcome the opportunity to discuss how my background, skills, and experiences would benefit ${company}. Thank you for considering my application.

Sincerely,
[Your Name]`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Cover Letter Generator</h1>
              <p className="text-muted-foreground">
                Create a personalized cover letter that highlights your relevant skills and experience.
              </p>
            </div>

            <Tabs defaultValue="input" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="input">Input</TabsTrigger>
                <TabsTrigger value="result" disabled={!optimizedCoverLetter}>
                  Result
                </TabsTrigger>
              </TabsList>

              <TabsContent value="input" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Resume</CardTitle>
                        <CardDescription>Paste your current resume text or upload a file</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          <Textarea
                            placeholder="Paste your resume text here..."
                            className="min-h-[200px]"
                            value={resumeText}
                            onChange={(e) => setResumeText(e.target.value)}
                          />
                          <div className="flex items-center gap-2">
                            <Label
                              htmlFor="resume-file"
                              className="cursor-pointer flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <Upload className="h-4 w-4" />
                              <span>Upload Resume</span>
                            </Label>
                            <Input
                              id="resume-file"
                              type="file"
                              className="hidden"
                              accept=".pdf,.doc,.docx,.txt"
                              onChange={(e) => {
                                // In a real app, you would parse the file here
                                alert("File upload functionality would be implemented in a real application")
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Company Information</CardTitle>
                        <CardDescription>Enter details about the company you're applying to</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="company-name">Company Name</Label>
                            <Input
                              id="company-name"
                              placeholder="Enter company name"
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Job Description</CardTitle>
                      <CardDescription>Paste the job description you're applying for</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Paste the job description here..."
                        className="min-h-[300px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 flex justify-center">
                  <Button
                    size="lg"
                    onClick={handleOptimize}
                    disabled={!resumeText || !jobDescription || !companyName || isOptimizing}
                  >
                    {isOptimizing ? "Generating..." : "Generate Cover Letter"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="result" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Cover Letter</CardTitle>
                    <CardDescription>
                      This cover letter has been tailored to highlight your relevant experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-md p-4 min-h-[400px] whitespace-pre-line">
                      {optimizedCoverLetter}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => window.print()}>
                      Print
                    </Button>
                    <Button>Download as PDF</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium">StreamLine</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

