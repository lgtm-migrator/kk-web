import './style.module.scss';

import React, { ComponentPropsWithoutRef, FC } from 'react';

export type ExternalLinkProps = Pick<
ComponentPropsWithoutRef<'a'>,
'children' | 'href'
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
