import { PageProps } from 'gatsby';
import React, { FC, useMemo } from 'react';
import LinkList, { LinkListProps } from 'components/molecules/LinkList';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type ServiceProps = PageProps;

const Service: FC<ServiceProps> = () => {
  const items = useMemo<LinkListProps['items']>(
    () => [
      {
        children: '限界しりとりタイマー',
        href: 'https://siritori-timer.kk-web.link/',
      },
      {
        children: 'せりふや',
        href: 'https://serifuya.kk-web.link/',
      },
      {
        children: 'レシグル',
        href: 'https://recigle.kk-web.link/',
      },
    ],
    [],
  );

  return (
    <>
      <Seo path="/service" title="Service" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </>
  );
};

export default Service;
