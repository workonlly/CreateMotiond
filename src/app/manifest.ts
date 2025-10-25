import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CreateMotion - Motion Graphics & Video Editing',
    short_name: 'CreateMotion',
    description: 'Professional motion graphics and video editing services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/create.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/create.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}