import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { site } from '@/lib/site';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] });
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'] });

const title = 'StudentSuite: open-source tools that help students plan less and learn more';
const description =
  'Free, open tools built around one idea: students deserve better software. Shaped by rigorous programs like IGCSE and IB, but open to any student, anywhere.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
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
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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
            __html: `(function(){var d=document.documentElement;d.classList.add('no-transition');var s=null;try{s=localStorage.getItem('theme')}catch(e){}if(s==='dark'){d.classList.add('dark')}else if(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches){d.classList.add('dark')}requestAnimationFrame(function(){requestAnimationFrame(function(){d.classList.remove('no-transition')})})})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[var(--background)]`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--background)]"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
