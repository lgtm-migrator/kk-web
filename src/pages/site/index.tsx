import LinkList, { LinkListProps } from "components/molecules/LinkList";
import React, { FC, useMemo } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";

export type SiteProps = PageProps;

const Site: FC<SiteProps> = () => {
  const items = useMemo<LinkListProps["items"]>(
    () => [
      {
        children: "ヒットミーアップ株式会社",
        href: "https://hitmeup.co.jp/",
      },
      {
        children: "1stKontact",
        href: "http://kontaniki.com/",
      },
      {
        children: "春告と雪息子",
        href: "http://yukimusuko.meltlabcd.com/",
      },
      {
        children: "Queen of Wand",
        href: "http://www.q-o-w.jp/",
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

export default Site;
