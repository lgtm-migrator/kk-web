import "./style.module.scss";

import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import { Link, GatsbyLinkProps } from "gatsby";

import ExternalLink from "components/atoms/ExternalLink";

type Item =
  | Required<Pick<ComponentPropsWithoutRef<"a">, "children" | "href">>
  | Pick<GatsbyLinkProps<any>, "children" | "to">;

export type LinkListProps = {
  items: Item[];
};

const LinkList: FC<LinkListProps> = ({ items }) => {
  const children = useMemo(
    () =>
      items.map(({ children, ...item }) => {
        if ("href" in item) {
          const { href } = item;

          return (
            <li key={href} styleName="item">
              <ExternalLink href={href}>{children}</ExternalLink>
            </li>
          );
        }

        const { to } = item;

        return (
          <li key={to} styleName="item">
            <Link to={to}>{children}</Link>
          </li>
        );
      }),
    [items]
  );

  return <ul styleName="link-list">{children}</ul>;
};

export default LinkList;
