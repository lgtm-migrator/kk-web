import LinkList, { LinkListProps } from "components/molecules/LinkList";
import React, { FC, Fragment, useMemo } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";
import Seo from "components/templates/Seo";

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
    <Fragment>
      <Seo path="/site" title="Site" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </Fragment>
  );
};

export default Site;
