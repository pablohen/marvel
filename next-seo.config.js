const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Marvel API demo';
const description = 'Marvel API demo using React.';
const keywords = 'Marvel, pablohen, next, js, tailwind, css';
const nextSeo = {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  keywords,
  openGraph: {
    type: 'website',
    locale: 'en-US',
    site_name: siteName,
    description,
    images: [
      {
        url: `${site}/logo.png`,
        width: 320,
        height: 129,
        alt: 'Marvel logo',
      },
    ],
  },
};

export default nextSeo;
