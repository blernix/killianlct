/** @type {import('next').NextConfig} */
const nextConfig = {
  // On ajoute cette ligne pour activer l'export statique
  output: 'export',
  
  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;