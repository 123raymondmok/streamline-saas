# StreamLine - Resume & Cover Letter Optimization SaaS

StreamLine is a modern SaaS application that helps job seekers optimize their resumes and cover letters using AI. Built with Next.js, TypeScript, and powered by OpenAI's GPT-4.

## Features

- 🤖 AI-powered resume optimization
- ✍️ Smart cover letter generation
- 📄 PDF and Word document support
- 💰 Stripe subscription integration
- 🔒 Secure authentication with Clerk
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Auth**: Clerk
- **Database**: PostgreSQL with Prisma
- **UI**: Tailwind CSS, shadcn/ui
- **File Upload**: UploadThing
- **AI**: OpenAI GPT-4
- **Payments**: Stripe

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/streamline-saas.git
   cd streamline-saas
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update the environment variables in `.env` with your:
   - Database URL
   - Clerk API keys
   - UploadThing credentials
   - OpenAI API key
   - Stripe API keys

5. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. Run the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
streamline-saas/
├── app/                   # Next.js app router
├── components/           # React components
├── lib/                  # Utility functions and configurations
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── styles/              # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 