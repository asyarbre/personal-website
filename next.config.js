/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['res.cloudinary.com', 'i.scdn.co'],
  },
};

module.exports = nextConfig;
