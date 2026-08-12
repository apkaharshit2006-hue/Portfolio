import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/providers';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';
import { CommandPalette } from '@/components/navigation/command-palette';
import { ResumeAssistantDrawer } from '@/components/ai/resume-assistant';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harshit Kumar Sinha | Business Intelligence & AI Specialist',
  description: 'Portfolio of Harshit Kumar Sinha — Business Analytics, Python Data Pipelines, MySQL Warehousing, and Generative AI GANs.',
  keywords: ['Business Intelligence', 'Data Analytics', 'Python', 'MySQL', 'GANs', 'AI Automation', 'Harshit Kumar Sinha'],
  authors: [{ name: 'Harshit Kumar Sinha' }],
  openGraph: {
    title: 'Harshit Kumar Sinha | Business Intelligence & AI Systems',
    description: 'Explore interactive BI dashboards, GAN handwriting generation models, and predictive data pipelines.',
    url: 'https://harshitsinha.dev',
    siteName: 'Harshit Kumar Sinha Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased bg-black text-gray-100 selection:bg-indigo-500 selection:text-white font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CommandPalette />
            <ResumeAssistantDrawer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
