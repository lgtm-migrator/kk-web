import { PageProps } from 'gatsby';
import React, { FC, useMemo } from 'react';
import LinkList, { LinkListProps } from 'components/molecules/LinkList';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type SiteProps = PageProps;

const Site: FC<SiteProps> = () => {
  const items = useMemo<LinkListProps['items']>(
    () => [
      {
        children: 'ヒットミーアップ株式会社',
        href: 'https://hitmeup.co.jp/',
      },
      {
        children: '1stKontact',
        href: 'http://kontaniki.com/',
      },
    ],
    [],
  );

  return (
    <>
      <Seo path="/site" title="Site" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </>
  );
};

export default Site;
