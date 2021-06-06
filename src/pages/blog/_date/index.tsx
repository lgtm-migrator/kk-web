import dayjs from 'dayjs';
import { PageProps, graphql } from 'gatsby';
import { ToastContainer, toast } from 'react-toastify';
import React, { FC, useCallback } from 'react';
import Blog, { BlogProps } from 'components/organisms/Blog';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type DateProps = PageProps<{
  markdownRemark: {
    frontmatter: { date: string; title: string };
    internal: {
      content: string;
    };
    rawMarkdownBody: string;
  } | null;
}>;

const Date: FC<DateProps> = ({ data: { markdownRemark } }) => {
  const {
    frontmatter: { date, title },
    internal: { content },
    rawMarkdownBody,
  } = markdownRemark || { frontmatter: {}, internal: {} };
  const handleCopy = useCallback<NonNullable<BlogProps['handleCopy']>>(
    (_, result) => {
      if (result) {
        toast.success('Copy Success!');

        return;
      }

      toast.error('Copy failed');
    },
    [],
  );

  return (
    markdownRemark && (
      <>
        <Seo
          ogDescription={content}
          ogTitle={title}
          ogType="article"
          path={`/blog/${dayjs(date).format('YYYYMMDD')}`}
          title={title}
        />
        <Layout>
          <Blog
            date={date}
            handleCopy={handleCopy}
            heading={<h1>{title}</h1>}
            source={rawMarkdownBody}
          />
        </Layout>
        <ToastContainer pauseOnFocusLoss={false} position="bottom-right" />
      </>
    )
  );
};

export const pageQuery = graphql`
  query DateQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        title
        date
      }
      internal {
        content
      }
      rawMarkdownBody
    }
  }
`;

export default Date;
