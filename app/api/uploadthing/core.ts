import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { DocxLoader } from "langchain/document_loaders/fs/docx";
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
      
      let content = "";
      
      if (file.type === "application/pdf") {
        const loader = new PDFLoader(file.url);
        const docs = await loader.load();
        content = docs.map(doc => doc.pageContent).join("\n");
      } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        const loader = new DocxLoader(file.url);
        const docs = await loader.load();
        content = docs.map(doc => doc.pageContent).join("\n");
      }

      await prisma.resume.create({
        data: {
          userId,
          title: file.name,
          content,
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 