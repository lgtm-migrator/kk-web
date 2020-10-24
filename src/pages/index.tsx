import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Heading1 from 'components/atoms/Heading1';
import Top from 'components/organisms/Top';
import Layout from 'components/templates/Layout';
import Seo from 'components/templates/Seo';

export type PagesProps = PageProps;

const Pages: FC<PagesProps> = () => (
  <>
    <Seo />
    <Layout>
      <Top heading={<Heading1 />} />
    </Layout>
  </>
);

export default Pages;
