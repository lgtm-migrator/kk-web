import "./style.module.scss";

import React, { FC, useMemo } from "react";

import { Link } from "gatsby";
import usePrimaryLinks from "hooks/usePrimaryLinks";

const PrimaryNavigation: FC = () => {
  const primaryLinks = usePrimaryLinks();
  const children = useMemo(
    () =>
      primaryLinks.map(({ text, to }) => (
        <li key={text}>
          <Link activeClassName="active" styleName="link" to={to}>
            {text}
          </Link>
        </li>
      )),
    [primaryLinks]
  );

  return (
    <nav styleName="primary-navigation">
      <ul styleName="list">{children}</ul>
    </nav>
  );
};

export default PrimaryNavigation;
