import LinkList, { LinkListProps } from "components/molecules/LinkList";
import React, { FC, useMemo } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";

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
    <Layout>
      <LinkList items={items} />
    </Layout>
  );
};

export default Service;
