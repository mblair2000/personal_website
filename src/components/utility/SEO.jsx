import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description = 'Personal website of Michael Blair — developer, designer, and creator.',
  image = 'https://yourwebsite.com/og-image.png',
  url,
  type = 'website',
}) {
  const fullTitle = title ? `${title} | YourName` : 'YourName — Developer & Designer'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
