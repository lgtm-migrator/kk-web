import { PageProps } from "gatsby";
import React, { FC } from "react";

import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

export type NotFoundProps = PageProps;

const NotFound: FC<NotFoundProps> = () => (
  <>
    <Seo path="/404" title="404" />
    <Layout>404</Layout>
  </>
);

export default NotFound;
