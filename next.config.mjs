const nextConfig = {
  // ...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: ' http://localhost:3000',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.icon-icons.com',
        port: '',
        pathname: '/icons2/2428/PNG/512/github_black_logo_icon_147128.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.icon-icons.com',
        port: '',
        pathname: '/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png',
      },
    ],
  },
};

export default nextConfig;
