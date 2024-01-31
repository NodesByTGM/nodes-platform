/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet-async';
import AppConfig from '../utilities/config';

export default function SEO({
  title,
  description = AppConfig.SEO.META_DESCRIPTION,
  author = AppConfig.SEO.META_AUTHOR,
  image = AppConfig.SEO.META_IMAGE,
  keywords = AppConfig.SEO.META_KEYWORDS,
  publishedAt = AppConfig.SEO.META_PUBLISHED_AT,
  publisher = AppConfig.SEO.META_PUBLISHER,
  type = AppConfig.SEO.META_TYPE,
  url = AppConfig.SEO.META_URL,
  children,
}: any) {
  const siteTitle = title ? title + ' - ' + AppConfig.SEO.META_TITLE : title;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='author' content={author} />
      <meta name='twitter:description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:image' content={image} />
      <meta name='twitter:image' content={image} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content={type} />
      <meta name='published' content={publishedAt} />
      <meta name='publisher' content={publisher} />

      {children}
    </Helmet>
  );
}
