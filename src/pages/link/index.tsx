import React, { FC, useMemo } from "react";
import { PageProps } from "gatsby";

import LinkList, { LinkListProps } from "components/molecules/LinkList";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

export type LinkProps = PageProps;

const Link: FC<LinkProps> = () => {
  const items = useMemo<LinkListProps["items"]>(
    () => [
      {
        children: "GitHub",
        href: "https://github.com/piro0919",
      },
      {
        children: "Instagram",
        href: "https://www.instagram.com/piro9190/",
      },
      {
        children: "LINE sticker",
        href: "https://store.line.me/stickershop/product/4699951",
      },
      {
        children: "VIVIVIT",
        href: "https://www.vivivit.com/profile/public/AyPekahJAg",
      },
      {
        children: "Wantedly",
        href: "https://www.wantedly.com/users/125337597",
      },
      {
        children: "ニコニコミュニティ",
        href: "https://com.nicovideo.jp/community/co4686164",
      },
    ],
    []
  );

  return (
    <>
      <Seo path="/link" title="Link" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </>
  );
};

export default Link;
