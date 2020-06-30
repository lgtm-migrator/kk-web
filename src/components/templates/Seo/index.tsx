import { Helmet, HelmetProps } from "react-helmet";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

export type SeoProps = Pick<HelmetProps, "title">;

const Seo: FC<SeoProps> = ({ title }) => {
  const {
    site: {
      siteMetadata: { name },
    },
  } = useStaticQuery(graphql`
    query SeoQuery {
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
    </Helmet>
  );
};

export default Seo;
