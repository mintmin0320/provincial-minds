import siteMetadata from "@/shared/siteMetadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: siteMetadata.siteLogo,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: "뽑기 이미지",
      },
    ],
  },
  twitter: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: "뽑기 이미지",
      },
    ],
  },
} 