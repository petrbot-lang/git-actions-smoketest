/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // Set metadataBase to your production URL or env var
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE_URL || 'http://localhost:3000'
}

export default nextConfig
