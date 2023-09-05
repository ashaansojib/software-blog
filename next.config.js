/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'iremove.tools',
          },
          {
            protocol: 'https',
            hostname: 'images.wondershare.com'
          },
        ],
      },
}

module.exports = nextConfig
