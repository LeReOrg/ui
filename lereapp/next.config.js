const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: [
      "p0.pikist.com",
      "d2a2wjuuf1c30f.cloudfront.net",
      "i.pinimg.com",
      "www.beachcamera.com",
      "motorvina.com",
      "www.accenture.com",
    ],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);