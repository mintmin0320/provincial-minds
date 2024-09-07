import { MetadataRoute } from 'next'

import ROUTE_PATH from '@/shared/@common/constants/path'
import siteMetadata from '@/shared/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMetadata.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.ADDRESS_SEARCH,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.GACHA_CREATE,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.GACHA_CREATE_WAIT,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.GACHA_DRAW,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.GACHA_DRAW_LANDING,
      lastModified: new Date(),
      changeFrequency: 'never',
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.GACHA_SHARE,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.MESSAGE_CHOICE,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.TRANSIT_ROTE_RESULT,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
    {
      url: siteMetadata.siteUrl + ROUTE_PATH.TRANSIT_ROTE,
      lastModified: new Date(),
      changeFrequency: 'never',  
    },
  ]
}