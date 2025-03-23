import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star, Briefcase, FileText, Award } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StreamLine</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary">
              Login
            </Link>
            <Link href="/resume-optimizer">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Land Your Dream Job with Optimized Applications
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  StreamLine uses AI to tailor your resume and cover letter to match job requirements, increasing your
                  chances of getting interviews.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/resume-optimizer">
                  <Button className="w-full min-[400px]:w-auto">
                    Optimize Your Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cover-letter-optimizer">
                  <Button variant="outline" className="w-full min-[400px]:w-auto">
                    Create Cover Letter
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="StreamLine Dashboard"
                width={550}
                height={550}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Features That Set You Apart</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform offers powerful tools to help you stand out in the job market.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Resume Optimization</h3>
              <p className="text-center text-muted-foreground">
                AI-powered resume tailoring that matches your experience with job requirements.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cover Letter Generator</h3>
              <p className="text-center text-muted-foreground">
                Create personalized cover letters that highlight your relevant skills and experience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">ATS Compatibility</h3>
              <p className="text-center text-muted-foreground">
                Ensure your documents pass through Applicant Tracking Systems with optimized formatting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our users have achieved with StreamLine.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "After optimizing my resume with StreamLine, I received interview calls from 3 companies within a
                  week. I landed my dream job at a tech giant!"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-1">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The cover letter generator saved me hours of work. It perfectly highlighted my relevant experience
                  for each job application."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-1">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                </div>
                <div>
                  <p className="text-sm font-medium">Michael Chen</p>
                  <p className="text-xs text-muted-foreground">Marketing Specialist</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a career changer, I struggled to highlight transferable skills. StreamLine helped me create a
                  resume that got me interviews in a new industry."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-1">
                  <div className="h-8 w-8 rounded-full bg-gray-200" />
                </div>
                <div>
                  <p className="text-sm font-medium">Emily Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for your job search needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-muted-foreground">Essential tools for your job search</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>3 Resume Optimizations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>3 Cover Letters</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic ATS Compatibility</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup?plan=basic">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-muted-foreground">Advanced features for serious job seekers</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$19.99</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited Resume Optimizations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Unlimited Cover Letters</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Advanced ATS Compatibility</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Job Match Analysis</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup?plan=pro">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-muted-foreground">Custom solutions for teams and organizations</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">$49.99</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Team Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                  <span>Custom Branding</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup?plan=enterprise">
                  <Button className="w-full">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Land Your Dream Job?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of job seekers who have boosted their career with StreamLine.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/resume-optimizer">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Optimize Your Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/cover-letter-optimizer">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Create Cover Letter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">StreamLine</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

