import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

// Modern B2B Typography Pairing
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: {
    default: 'KOOLIXA | Resilient IT Operations & Proactive Cybersecurity',
    template: '%s | KOOLIXA',
  },
  description: 'Enterprise-grade IT support, proactive cybersecurity response coordination, and robust web systems. Secure your infrastructure with KOOLIXA.',
  keywords: [
    'managed IT support',
    'cybersecurity analysts',
    'help desk administration',
    'vulnerability review',
    'website development and maintenance',
    'project delivery and technical coordination',
    'backup and disaster recovery',
    'KOOLIXA',
  ],
  authors: [{ name: 'KOOLIXA Engineering' }],
  metadataBase: new URL('https://koolixa.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'KOOLIXA | Resilient IT Operations & Proactive Cybersecurity',
    description: 'Enterprise-grade IT support, proactive cybersecurity response coordination, and robust web systems. Secure your infrastructure with KOOLIXA.',
    url: 'https://koolixa.com',
    siteName: 'KOOLIXA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOOLIXA | Resilient IT Operations & Proactive Cybersecurity',
    description: 'Enterprise-grade IT support, proactive cybersecurity response coordination, and robust web systems. Secure your infrastructure with KOOLIXA.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC Blocking script to immediately load correct theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    var mq = window.matchMedia('(prefers-color-scheme: dark)');
                    theme = mq.matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main style={{ marginTop: '75px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
