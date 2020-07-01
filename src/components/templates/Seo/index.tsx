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
      <meta content="438978880268835" property="fb:app_id" />
      <meta content={ogDescription || description} property="og:description" />
      <meta content={`${homepage}${publicURL}`} property="og:image" />
      <meta content="630" property="og:image:height" />
      <meta content="1200" property="og:image:width" />
      <meta content="ja_JP" property="og:locale" />
      <meta content={name} property="og:site_name" />
      <meta
        content={
          ogTitle ? `${ogTitle} | ${name}` : title ? `${title} | ${name}` : name
        }
        property="og:title"
      />
      <meta content={ogType} property="og:type" />
      <meta content={`${homepage}${path}`} property="og:url" />
      <meta content="piro" name="author" />
      <meta content={ogDescription || description} name="description" />
      <meta content="summary_large_image" name="twitter:card" />
    </Helmet>
  );
};

export default Seo;
