/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: false,
  output: 'export',

  // On ajoute cette configuration pour les images
  images: {
    unoptimized: true,
  },
};

export default nextConfig;