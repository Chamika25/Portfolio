/** @type {import('next').NextConfig} */
/*
const nextConfig = {
  output: "export",
};

// next.config.js

module.exports = {
  target: 'serverless',
};


export default nextConfig;
 */

// next.config.js
const nextConfig = {
  output: 'export', // For static export
  target: 'serverless', // For serverless deployment on Netlify
};

export default nextConfig;
