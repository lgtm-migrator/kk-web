import { PageProps } from 'gatsby';
import React, { FC, useMemo } from 'react';
import LinkList, { LinkListProps } from 'components/molecules/LinkList';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type LinkProps = PageProps;

const Link: FC<LinkProps> = () => {
  const items = useMemo<LinkListProps['items']>(
    () => [
      {
        children: 'GitHub',
        href: 'https://github.com/piro0919',
      },
      {
        children: 'Instagram',
        href: 'https://www.instagram.com/piro9190/',
      },
      {
        children: 'Slack',
        href: 'https://kk-web.link/blog/20210529',
      },
      {
        children: 'Wantedly',
        href: 'https://www.wantedly.com/users/125337597',
      },
    ],
    [],
  );

  return (
    <>
      <Seo path="/link" title="Link" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </>
  );
};

export default Link;
