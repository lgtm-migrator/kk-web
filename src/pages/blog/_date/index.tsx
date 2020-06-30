import Blog, { BlogProps } from "components/organisms/Blog";
import { PageProps, graphql } from "gatsby";
import React, { FC, useMemo } from "react";

import Layout from "components/templates/Layout";

export type DateProps = PageProps<{
  markdownRemark: {
    frontmatter: { date: string; title: string };
    html: string;
  } | null;
}>;

const Date: FC<DateProps> = ({ data: { markdownRemark } }) => {
  if (!markdownRemark) {
    return null;
  }

  const {
    frontmatter: { date, title },
    html,
  } = markdownRemark;
  const heading = useMemo(() => <h1>{title}</h1>, [title]);
  const blogHtml = useMemo<BlogProps["html"]>(
    () => html.replace(/a href/g, 'a target="_blank" href'),
    []
  );

  return (
    <Layout>
      <Blog date={date} heading={heading} html={blogHtml} />
    </Layout>
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
    }
  }
`;

export default Date;
