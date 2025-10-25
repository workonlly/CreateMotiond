import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CreateMotion - Connect With Us on Social Media",
  description: "Connect with CreateMotion on all major social platforms. Follow us on Instagram, LinkedIn, WhatsApp, Discord, and X for the latest motion graphics and video editing content.",
  keywords: [
    "CreateMotion contact",
    "social media links",
    "Instagram CreateMotion",
    "LinkedIn CreateMotion", 
    "WhatsApp CreateMotion",
    "Discord CreateMotion",
    "Twitter CreateMotion",
    "motion graphics contact",
    "video editing contact",
    "connect with us"
  ],
  openGraph: {
    title: "Contact CreateMotion - Connect With Us on Social Media",
    description: "Connect with CreateMotion on all major social platforms. Follow us for the latest motion graphics and video editing content.",
    url: 'https://createmotion.com/Links',
    images: [
      {
        url: '/links-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CreateMotion Social Media Links - Connect With Us',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact CreateMotion - Connect With Us on Social Media",
    description: "Connect with CreateMotion on all major social platforms.",
    images: ['/links-og-image.jpg'],
  },
  alternates: {
    canonical: '/Links',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}