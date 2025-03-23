import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

export const ourFileRouter = {
  resumeUploader: f({ pdf: { maxFileSize: "4MB" }, docx: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const { userId } = auth();

      if (!userId) throw new Error("Unauthorized");

      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { userId } = metadata;

      // Store the file URL and basic metadata
      await prisma.resume.create({
        data: {
          userId,
          title: file.name,
          content: `File uploaded: ${file.name}\nURL: ${file.url}\nSize: ${file.size} bytes\nType: ${file.type}`,
        },
      });

      return { uploadedBy: userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 