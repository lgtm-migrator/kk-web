import React, { FC } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";

export type NotFoundProps = PageProps;

const NotFound: FC<NotFoundProps> = () => <Layout>404</Layout>;

export default NotFound;
