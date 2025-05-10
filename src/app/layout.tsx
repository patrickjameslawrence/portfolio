import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '../tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Patrick Lawrence',
    default: 'Patrick Lawrence - Software developer and entrepreneur'
  },
  description:
    'I’m Patrick, a software developer and entrepreneur based in Southeastern Pennsylvania. I specialize in building full-stack web applications and have a passion for creating innovative solutions to complex problems.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
