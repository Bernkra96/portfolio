const config = {
  defaultTitle: 'Bernhard K',
  url:
    process.env.NODE_ENV !== 'development'
      ? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string)
      : 'http://localhost:3040',
  defaultDescription: 'I’m Bernhard!',
  googleAnalyticsID: 'G-PE8QW0ZGTZ',
  NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL as string,
  twitter: '@smakosh',
};

export default config;
