/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // On ajoute cette configuration pour les images
  images: {
    unoptimized: true,
  },
};

export default nextConfig;