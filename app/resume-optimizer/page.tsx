"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Upload } from "lucide-react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { ResumeUploader } from "@/components/resume-uploader"
import { ResumeOptimizer } from "@/components/resume-optimizer"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ResumeOptimizerPage() {
  const { userId } = auth()

  if (!userId) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Resume Optimizer</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
            <ResumeUploader />
          </div>
          
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Job Details</h2>
            <ResumeOptimizer />
          </div>
        </div>
        
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Optimized Resume</h2>
          <div className="prose max-w-none">
            {/* Optimized content will be displayed here */}
            <p className="text-muted-foreground">
              Upload your resume and provide job details to get AI-powered optimization suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

