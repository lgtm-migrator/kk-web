import LinkList, { LinkListProps } from "components/molecules/LinkList";
import React, { FC, Fragment, useMemo } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";
import Seo from "components/templates/Seo";

export type ServiceProps = PageProps;

const Service: FC<ServiceProps> = () => {
  const items = useMemo<LinkListProps["items"]>(
    () => [
      {
        children: "Image Maker",
        href: "https://piro0919.github.io/image-maker/",
      },
      {
        children: "レジュメイク",
        href: "https://resumake.kk-web.link/",
      },
    ],
    []
  );

  return (
    <Fragment>
      <Seo title="Service" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </Fragment>
  );
};

export default Service;
