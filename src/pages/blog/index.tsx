import { Link, PageProps, graphql } from "gatsby";
import React, { FC, useMemo } from "react";

import BlogListBlock from "components/organisms/BlogListBlock";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

type Edge = {
  node: {
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
  };
};

export type BlogProps = PageProps<{ allMarkdownRemark: { edges: Edge[] } }>;

const Blog: FC<BlogProps> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const items = useMemo(
    () =>
      edges.map(({ node: { frontmatter: { date, slug, title } } }) => ({
        description: <Link to={slug}>{title}</Link>,
        key: slug,
        term: date,
      })),
    [edges]
  );

  return (
    <>
      <Seo ogType="blog" path="/blog" title="Blog" />
      <Layout>
        <BlogListBlock items={items} />
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
          }
        }
      }
    }
  }
`;

export default Blog;
