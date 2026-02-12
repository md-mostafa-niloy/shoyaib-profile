import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AntiTheft from '@/components/protection/AntiTheft';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GeneralSettings } from '@/system/GeneralSettings';
import PageBackground from '@/components/ui/PageBackground';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: GeneralSettings.metadata.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(GeneralSettings.metadata.siteUrl),
  title: {
    default: GeneralSettings.metadata.defaultTitle,
    template: GeneralSettings.metadata.titleTemplate,
  },
  description: GeneralSettings.metadata.description,
  applicationName: GeneralSettings.metadata.siteName,
  authors: [{ name: 'Mostafa Niloy', url: 'https://visernic.com' }],
  keywords: GeneralSettings.metadata.keywords,
  referrer: 'origin-when-cross-origin',
  creator: 'Mostafa Niloy',
  publisher: GeneralSettings.profile.name,
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
  icons: {
    icon: GeneralSettings.metadata.icon,
    shortcut: GeneralSettings.metadata.icon,
    apple: GeneralSettings.metadata.apple,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: GeneralSettings.metadata.siteUrl,
    title: GeneralSettings.metadata.defaultTitle,
    description: GeneralSettings.metadata.description,
    siteName: GeneralSettings.metadata.siteName,
    images: [
      {
        url: GeneralSettings.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${GeneralSettings.profile.name} Profile Cover`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: GeneralSettings.metadata.defaultTitle,
    description: GeneralSettings.metadata.description,
    images: [GeneralSettings.metadata.twitterImage],
    creator: GeneralSettings.metadata.creator,
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body 
        className={`${inter.className} bg-slate-950 text-slate-200 antialiased overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200`} 
        suppressHydrationWarning={true}
      >
        <PageBackground />
        <AntiTheft />
        <div className="relative z-10 min-h-screen flex flex-col">
           {children}
        </div>
        <GoogleAnalytics gaId={GeneralSettings.metadata.googleAnalyticsId} />
      </body>
    </html>
  );
}
