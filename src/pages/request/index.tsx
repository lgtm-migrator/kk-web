import { PageProps } from "gatsby";
import React, { FC, useMemo } from "react";

import LinkList, { LinkListProps } from "components/molecules/LinkList";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

export type RequestProps = PageProps;

const Request: FC<RequestProps> = () => {
  const items = useMemo<LinkListProps["items"]>(
    () => [
      {
        children: "Frontend",
        to: "/request/frontend",
      },
      {
        children: "Movie",
        to: "/request/movie",
      },
      {
        children: "Website",
        to: "/request/website",
      },
    ],
    []
  );

  return (
    <>
      <Seo path="/request" title="Request" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </>
  );
};

export default Request;
