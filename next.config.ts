/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.lezard-agency.com',
        port: '',              // leave empty for default
        pathname: '/api/ig/pdp/**', // narrow to the path you use
      },
    ],
  },
};
module.exports = nextConfig;
