import { NextSeoProps } from 'next-seo';

const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Marvel API';
const description = 'Marvel API demo using React.';

const nextSeo: NextSeoProps = {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
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
