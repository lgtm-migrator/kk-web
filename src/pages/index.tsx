import React, { FC } from "react";
import { PageProps } from "gatsby";

import Heading1 from "components/atoms/Heading1";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";
import Top from "components/organisms/Top";

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
