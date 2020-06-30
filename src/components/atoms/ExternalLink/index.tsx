import "./style.module.scss";

import React, { FC } from "react";

export type ExternalLinkProps = Pick<
  JSX.IntrinsicElements["a"],
  "children" | "href"
>;

const ExternalLink: FC<ExternalLinkProps> = ({ children, href }) => (
  <a
    href={href}
    rel="noopener noreferrer"
    styleName="external-link"
    target="_blank"
  >
    {children}
  </a>
);

export default ExternalLink;
