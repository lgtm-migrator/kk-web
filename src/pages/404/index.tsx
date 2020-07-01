import React, { FC, Fragment } from "react";

import { PageProps } from "gatsby";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

export type NotFoundProps = PageProps;

const NotFound: FC<NotFoundProps> = () => (
  <Fragment>
    <Seo path="/404" title="404" />
    <Layout>404</Layout>
  </Fragment>
);

export default NotFound;
