import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'] });

const title = 'StudentSuite: open-source tools that help students plan less and learn more';
const description =
  'Free, open tools built around one idea: students deserve better software. Shaped by rigorous programs like IGCSE and IB, but open to any student, anywhere.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://studentsuite.dev'),
  title,
  description,
  keywords: ['students', 'open source', 'study tools', 'IB', 'IGCSE', 'StudyMap', 'StudentSuite'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'StudentSuite',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'StudentSuite' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4F46E5' },
    { media: '(prefers-color-scheme: dark)', color: '#818CF8' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add('no-transition');var s=localStorage.getItem('theme');if(s==='dark'){d.classList.add('dark')}else if(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches){d.classList.add('dark')}requestAnimationFrame(function(){requestAnimationFrame(function(){d.classList.remove('no-transition')})})})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[var(--background)]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
