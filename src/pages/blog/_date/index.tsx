import { PageProps, graphql } from "gatsby";
import React, { FC, Fragment } from "react";
import dayjs from "dayjs";
import Blog from "components/organisms/Blog";

import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

export type DateProps = PageProps<{
  markdownRemark: {
    frontmatter: { date: string; title: string };
    html: string;
    internal: {
      content: string;
    };
  } | null;
}>;

const Date: FC<DateProps> = ({ data: { markdownRemark } }) => {
  if (!markdownRemark) {
    return null;
  }

  const {
    frontmatter: { date, title },
    html,
    internal: { content },
  } = markdownRemark;

  return (
    <Fragment>
      <Seo
        ogDescription={content}
        ogTitle={title}
        ogType="article"
        path={`/blog/${dayjs(date).format("YYYYMMDD")}`}
        title={title}
      />
      <Layout>
        <Blog
          date={date}
          heading={<h1>{title}</h1>}
          html={html.replace(/a href/g, 'a target="_blank" href')}
        />
      </Layout>
    </Fragment>
  );
};

export const pageQuery = graphql`
  query DateQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        date
      }
      internal {
        content
      }
    }
  }
`;

export default Date;
