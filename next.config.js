const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["res.cloudinary.com","lh6.googleusercontent.com"],
  },
  webpack5: false,
};

module.exports = withPlugins([[withImages]], nextConfig);
