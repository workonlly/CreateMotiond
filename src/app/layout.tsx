import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingWrapper from './components/LoadingWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CreateMotion - Professional Motion Graphics & Video Editing Services",
    template: "%s | CreateMotion"
  },
  description: "Transform your brand with stunning motion graphics, shortform content, and professional video editing. We create viral-worthy content that captivates audiences and drives engagement.",
  keywords: [
    "motion graphics",
    "video editing",
    "shortform content",
    "social media videos",
    "thumbnail design",
    "brand visuals",
    "animation services",
    "content creation",
    "viral videos",
    "professional editing"
  ],
  authors: [{ name: "CreateMotion Team" }],
  creator: "CreateMotion",
  publisher: "CreateMotion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://createmotion.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "CreateMotion - Professional Motion Graphics & Video Editing Services",
    description: "Transform your brand with stunning motion graphics, shortform content, and professional video editing. We create viral-worthy content that captivates audiences and drives engagement.",
    url: 'https://createmotion.com',
    siteName: 'CreateMotion',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CreateMotion - Motion Graphics and Video Editing Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CreateMotion - Professional Motion Graphics & Video Editing Services",
    description: "Transform your brand with stunning motion graphics, shortform content, and professional video editing.",
    images: ['/og-image.jpg'],
    creator: '@createmotion',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=BBH+Sans+Bogle&family=Bitcount+Grid+Single:wght@100..900&family=Cinzel:wght@400..900&family=Rock+Salt&family=Sedan+SC&family=Stalinist+One&display=swap" rel="stylesheet" />
        
        {/* Additional SEO and Performance Tags */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CreateMotion",
              "url": "https://createmotion.com",
              "logo": "https://createmotion.com/logo.png",
              "description": "Professional motion graphics and video editing services",
              "sameAs": [
                "https://instagram.com/createmotion",
                "https://linkedin.com/company/createmotion",
                "https://twitter.com/createmotion"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "areaServed": "Worldwide",
              "serviceType": [
                "Motion Graphics",
                "Video Editing",
                "Shortform Content Creation",
                "Thumbnail Design",
                "Brand Visuals"
              ]
            })
          }}
        />
        
        {/* Google Analytics (replace with your GA4 tracking ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
