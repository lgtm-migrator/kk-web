import "./style.module.scss";

import React, { FC, useMemo } from "react";

import ExternalLink from "components/atoms/ExternalLink";

type Item = Required<Pick<JSX.IntrinsicElements["a"], "children" | "href">>;

export type LinkListProps = {
  items: Item[];
};

const LinkList: FC<LinkListProps> = ({ items }) => {
  const children = useMemo(
    () =>
      items.map(({ children, href }) => (
        <li key={href} styleName="item">
          <ExternalLink href={href}>{children}</ExternalLink>
        </li>
      )),
    [items]
  );

  return <ul styleName="link-list">{children}</ul>;
};

export default LinkList;
