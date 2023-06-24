const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: [
      'newprofilepic2.photo-cdn.net', 'i.postimg.cc', 'firebasestorage.googleapis.com'
    ],
  },
};


module.exports = nextConfig;