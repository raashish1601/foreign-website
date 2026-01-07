import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Foreign Admits - Study Abroad Consultancy',
    short_name: 'Foreign Admits',
    description: 'Your trusted partner for studying abroad. Expert guidance for international education opportunities.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
