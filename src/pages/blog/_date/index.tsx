import Blog, { BlogProps } from "components/organisms/Blog";
import { PageProps, graphql } from "gatsby";
import React, { FC, Fragment, useMemo } from "react";

import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";
import dayjs from "dayjs";

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
  const heading = useMemo(() => <h1>{title}</h1>, [title]);
  const blogHtml = useMemo<BlogProps["html"]>(
    () => html.replace(/a href/g, 'a target="_blank" href'),
    []
  );

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
        <Blog date={date} heading={heading} html={blogHtml} />
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
