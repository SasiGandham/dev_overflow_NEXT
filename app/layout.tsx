import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'


const inter = Inter({
  subsets : ['latin'],
  weight : ['100','200','300','400','500','600','700','800','900'],
  variable : '--font-inter'
})

const spacegrotesk = Space_Grotesk({
  subsets : ['latin'],
  weight : ['300','400','500','600','700'],
  variable : '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'Devflow',
  description: 'A community which makes interactivity easier by solving doubts each other ....',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{
      elements : {
        formButtonPrimary: 'primary-gradient',
        footerActionLink : 'primary-text-gradient hover: text-primary-500',

      }
    }}>
      <html lang="en">
        <body className={`${inter.variable} ${spacegrotesk.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <ThemeProvider>
              {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}