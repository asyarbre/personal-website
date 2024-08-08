const canonicalUrl = 'https://asyari.web.id';
const metaImage =
  'https://res.cloudinary.com/asyari/image/upload/v1723107776/asyari-web-id_pbisqa.png';
const metaDescription =
  'aspiring to be a software engineer interested in full-stack development';

const defaultSEOConfig = {
  defaultTitle: `Asya'ri - Personal Website`,
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: `Asya'ri - Personal Website`,
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'asyari.web.id og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'asyari.web.id og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'asyari.web.id og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'asyari.web.id',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
