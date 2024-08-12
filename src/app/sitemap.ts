import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://provincial-minds.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: 'https://provincial-minds.vercel.app/distance-search',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/gacha-create',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/gacha-create-wait',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/gacha-draw',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/gacha-shupple',
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: 'https://provincial-minds.vercel.app/gacha-share',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/message-choice',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/transit-route-result',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: 'https://provincial-minds.vercel.app/transit-route-search',
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
  ]
}