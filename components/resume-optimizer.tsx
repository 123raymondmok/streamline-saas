import { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export function ResumeOptimizer() {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const handleOptimize = async () => {
    if (!jobTitle || !company || !jobDescription) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsOptimizing(true);

    try {
      // Here we would call our AI optimization API
      const response = await fetch("/api/optimize-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle,
          company,
          jobDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to optimize resume");
      }

      toast({
        title: "Resume optimized",
        description: "Your resume has been optimized for the job",
      });
    } catch (error) {
      toast({
        title: "Optimization failed",
        description: "There was an error optimizing your resume",
        variant: "destructive",
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="jobTitle">Job Title</Label>
        <Input
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="e.g. Software Engineer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g. Google"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobDescription">Job Description</Label>
        <Textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          className="min-h-[200px]"
        />
      </div>

      <Button
        className="w-full"
        onClick={handleOptimize}
        disabled={isOptimizing}
      >
        {isOptimizing ? (
          "Optimizing..."
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Optimize Resume
          </>
        )}
      </Button>
    </div>
  );
} 