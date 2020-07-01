import { Helmet, HelmetProps } from "react-helmet";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

export type SeoProps = Pick<HelmetProps, "title"> & {
  ogDescription?: JSX.IntrinsicElements["meta"]["content"];
  ogTitle?: JSX.IntrinsicElements["meta"]["content"];
  ogType?: JSX.IntrinsicElements["meta"]["content"];
  path?: JSX.IntrinsicElements["meta"]["content"];
};

const Seo: FC<SeoProps> = ({
  ogDescription,
  ogTitle,
  ogType = "website",
  path = "",
  title,
}) => {
  const {
    file: { publicURL },
    site: {
      siteMetadata: { description, homepage, name },
    },
  } = useStaticQuery(graphql`
    query SeoQuery {
      file(name: { eq: "kk-web" }) {
        publicURL
      }
      site {
        siteMetadata {
          description
          homepage
          name
        }
      }
    }
  `);

  return (
    <Helmet defaultTitle={name} title={title} titleTemplate={`%s | ${name}`}>
      <html lang="ja" />
      <meta property="fb:app_id" content="438978880268835" />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={`${homepage}${publicURL}`} />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content={name} />
      <meta
        property="og:title"
        content={
          ogTitle ? `${ogTitle} | ${name}` : title ? `${title} | ${name}` : name
        }
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${homepage}${path}`} />
      <meta name="author" content="piro" />
      <meta name="description" content={ogDescription || description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default Seo;
