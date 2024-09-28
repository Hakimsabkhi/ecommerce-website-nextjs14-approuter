/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
           
          },
        ],
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          config.externals.push('nodemailer');
        }
        return config;
      },
      
};

export default nextConfig;
