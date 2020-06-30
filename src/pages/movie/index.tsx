import LinkList, { LinkListProps } from "components/molecules/LinkList";
import React, { FC, useMemo } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";

export type MovieProps = PageProps;

const Movie: FC<MovieProps> = () => {
  const items = useMemo<LinkListProps["items"]>(
    () => [
      {
        children: "Vimeo",
        href: "https://vimeo.com/piro0919",
      },
      {
        children: "YouTube",
        href: "https://www.youtube.com/channel/UC--pDyTi3aPS5wf6PN6kXDA",
      },
      {
        children: "niconico",
        href: "http://www.nicovideo.jp/mylist/30473930",
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

export default Movie;
