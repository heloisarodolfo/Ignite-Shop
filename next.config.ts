/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.stripe.com'], // Certifique-se de incluir este domínio
  },
};

module.exports = nextConfig;