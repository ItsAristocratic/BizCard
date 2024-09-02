/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { isServer }) => {
      console.log('Webpack Config:', config);
      return config;
    },
};

export default nextConfig;
