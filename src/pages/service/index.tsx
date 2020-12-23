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
        children: 'React npm',
        href: 'https://react-npm.kk-web.link/',
      },
      {
        children: 'レシグル',
        href: 'https://recigle.kk-web.link/',
      },
      {
        children: 'レジュメイク',
        href: 'https://resumake.kk-web.link/',
      },
      {
        children: 'Image Maker',
        href: 'https://piro0919.github.io/image-maker/',
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
