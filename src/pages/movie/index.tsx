import React, { FC, useMemo } from "react";
import { PageProps } from "gatsby";

import LinkList, { LinkListProps } from "components/molecules/LinkList";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

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
    <>
      <Seo path="/movie" title="Movie" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </>
  );
};

export default Movie;
