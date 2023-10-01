/** @type {import('next').NextConfig} */
const nextConfig = {
   
        experimental: {
          images: {
            domains: ['cdn.imagin.studio'], // Add the domain of your image source here
          },
        },
      };


module.exports = nextConfig
