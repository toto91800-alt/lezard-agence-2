/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ✅ ton proxy API
      {
        protocol: 'https',
        hostname: 'app.lezard-agency.com',
        port: '',
        pathname: '/api/ig/pdp/**',
      },
      // ✅ Instagram CDN (ex: scontent-cdg4-2.cdninstagram.com)
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
