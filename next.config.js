// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images:{
//     dangerouslyAllowSVG: true,
//     remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: 'rb.gy',
//       port: '',
//       pathname: '/ulxxee/**',
      
      
      
//     },
//     {
//       protocol: 'https',
//       hostname: 'rb.gy',
//       port: '',
//       pathname: '/g1pwyx/**',
      
      
      
//     },
//     {
//       protocol: 'https',
//       hostname: 'image.tmdb.org',
//       port: '',
      
//     },
//     {
//       protocol: 'https',
//       hostname: 'rb.gy',
//       port: '',
//       pathname: '/p2hphi/**',
      
      
      
//     }
    

    
  
//     ]
// }
// }

// module.exports = nextConfig
const withTM = require('next-transpile-modules')(['@stripe/firestore-stripe-payments']);

const nextConfig = {
  reactStrictMode: true,
  images:{
    dangerouslyAllowSVG: true,
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'rb.gy',
      port: '',
      pathname: '/ulxxee/**',
      
      
      
    },
    {
      protocol: 'https',
      hostname: 'rb.gy',
      port: '',
      pathname: '/g1pwyx/**',
      
      
      
    },
    {
      protocol: 'https',
      hostname: 'image.tmdb.org',
      port: '',
      
    },
    {
      protocol: 'https',
      hostname: 'rb.gy',
      port: '',
      pathname: '/p2hphi/**',
      
      
      
    }
    

    
  
    ]
}
}
const { withSuperjson } = require('next-superjson')

module.exports = withSuperjson()(withTM(nextConfig));
