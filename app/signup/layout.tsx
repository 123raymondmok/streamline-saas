import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up - StreamLine",
  description: "Create your StreamLine account",
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 