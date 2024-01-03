/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
		serverActions: true
	},
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.myanimelist.net',
          }
        ],
      },
}

module.exports = nextConfig
