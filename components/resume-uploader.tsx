import { useState } from "react";
import { Upload, File, Loader2 } from "lucide-react";
import { useUploadThing } from "@/lib/uploadthing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();
  const { startUpload, isUploading } = useUploadThing("resumeUploader");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf" || 
          selectedFile.type === "application/msword" || 
          selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      const uploadedFiles = await startUpload([file]);
      
      if (uploadedFiles) {
        toast({
          title: "Resume uploaded",
          description: "Your resume has been uploaded successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your resume",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        <Button
          onClick={handleUpload}
          disabled={!file || isUploading}
        >
          {isUploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </>
          )}
        </Button>
      </div>
      
      {file && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <File className="h-4 w-4" />
          <span>{file.name}</span>
        </div>
      )}
    </div>
  );
} 