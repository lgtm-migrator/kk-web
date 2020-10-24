/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style.module.scss';

import { GatsbyLinkProps, Link } from 'gatsby';
import React, {
  ComponentPropsWithRef, FC, forwardRef, useMemo,
} from 'react';
import Icon from 'components/atoms/Icon';
import usePrimaryLinks from 'hooks/usePrimaryLinks';

export type SquareNavigationProps = Pick<
  ComponentPropsWithRef<'nav'>,
  'ref'
> & {
  handleClickOnLink: GatsbyLinkProps<never>['onClick'];
};

const SquareNavigation: FC<SquareNavigationProps> = forwardRef<
  HTMLElement,
  SquareNavigationProps
>(({ handleClickOnLink }, ref) => {
  const primaryLinks = usePrimaryLinks();
  const children = useMemo(
    () => primaryLinks.map(({ icon, text, to }) => (
      <li key={text}>
        <div styleName="link-wrapper">
          <Link
            activeClassName="active"
            onClick={handleClickOnLink}
            styleName="icon-link"
            to={to}
          >
            <Icon icon={icon} size={30} style={{ color: '#a6dfec' }} />
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
    [handleClickOnLink, primaryLinks],
  );

  return (
    <nav ref={ref} styleName="square-navigation">
      <ul styleName="list">{children}</ul>
    </nav>
  );
});

export default SquareNavigation;
