/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  server:{
    host: "0.0.0.0"
  }
};
