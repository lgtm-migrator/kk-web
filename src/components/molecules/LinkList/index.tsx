import './style.module.scss';

import { GatsbyLinkProps, Link } from 'gatsby';
import React, { ComponentPropsWithoutRef, FC, useMemo } from 'react';
import ExternalLink from 'components/atoms/ExternalLink';

type Item =
  | Required<Pick<ComponentPropsWithoutRef<'a'>, 'children' | 'href'>>
  | Pick<GatsbyLinkProps<never>, 'children' | 'to'>;

export type LinkListProps = {
  items: Item[];
};

const LinkList: FC<LinkListProps> = ({ items }) => {
  const children = useMemo(
    () => items.map(({ children: itemChildren, ...item }) => {
      if ('href' in item) {
        const { href } = item;

        return (
          <li key={href} styleName="item">
            <ExternalLink href={href}>{itemChildren}</ExternalLink>
          </li>
        );
      }

      const { to } = item;

      return (
        <li key={to} styleName="item">
          <Link to={to}>{itemChildren}</Link>
        </li>
      );
    }),
    [items],
  );

  return <ul styleName="link-list">{children}</ul>;
};

export default LinkList;
