// /** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: false, // 设置为false
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_ENV: process.env.APP_ENV
  },
};

