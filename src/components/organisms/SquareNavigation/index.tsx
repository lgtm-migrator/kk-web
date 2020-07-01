import "./style.module.scss";

import { GatsbyLinkProps, Link } from "gatsby";
import React, { FC, useMemo } from "react";

import Icon from "components/atoms/Icon";
import usePrimaryLinks from "hooks/usePrimaryLinks";

export type SquareNavigationProps = {
  handleClickOnLink: GatsbyLinkProps<any>["onClick"];
  squareNavigationRef: JSX.IntrinsicElements["nav"]["ref"];
};

const SquareNavigation: FC<SquareNavigationProps> = ({
  handleClickOnLink,
  squareNavigationRef,
}) => {
  const primaryLinks = usePrimaryLinks();
  const children = useMemo(
    () =>
      primaryLinks.map(({ icon, text, to }) => (
        <li key={text}>
          <div styleName="link-wrapper">
            <Link
              activeClassName="active"
              onClick={handleClickOnLink}
              styleName="icon-link"
              to={to}
            >
              <Icon icon={icon} />
            </Link>
            <Link
              activeClassName="active"
              onClick={handleClickOnLink}
              styleName="text-link"
              to={to}
            >
              {text}
            </Link>
          </div>
        </li>
      )),
    [handleClickOnLink, primaryLinks]
  );

  return (
    <nav ref={squareNavigationRef} styleName="square-navigation">
      <ul styleName="list">{children}</ul>
    </nav>
  );
};

export default SquareNavigation;
