import LinkList, { LinkListProps } from "components/molecules/LinkList";
import React, { FC, Fragment, useMemo } from "react";

import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";
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
    <Fragment>
      <Seo title="Movie" />
      <Layout>
        <LinkList items={items} />
      </Layout>
    </Fragment>
  );
};

export default Movie;
