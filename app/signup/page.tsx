"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, FileText, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const planFromUrl = searchParams.get("plan")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedPlan, setSelectedPlan] = useState(planFromUrl || "basic")
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !password) return

    setIsLoading(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // This is where you would normally register the user
      setIsLoading(false)
      // Redirect to dashboard or home page
      window.location.href = "/"
    }, 1500)
  }

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$9.99/month",
      features: ["3 Resume Optimizations", "3 Cover Letters", "Basic ATS Compatibility"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$19.99/month",
      features: [
        "Unlimited Resume Optimizations",
        "Unlimited Cover Letters",
        "Advanced ATS Compatibility",
        "Job Match Analysis",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$49.99/month",
      features: ["Everything in Pro", "Team Management", "Priority Support", "Custom Branding"],
    },
  ]

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

      <main className="flex-1 py-8 md:py-12">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                <CardDescription>Enter your information to create an account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Select a Plan</Label>
                    <RadioGroup
                      value={selectedPlan}
                      onValueChange={setSelectedPlan}
                      className="grid gap-4 md:grid-cols-3"
                    >
                      {plans.map((plan) => (
                        <div key={plan.id} className="relative">
                          <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                          <Label
                            htmlFor={plan.id}
                            className="flex flex-col gap-2 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            <div className="font-semibold">{plan.name}</div>
                            <div className="text-sm font-medium">{plan.price}</div>
                            <ul className="mt-2 text-sm text-muted-foreground">
                              {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
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

