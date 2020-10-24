import './style.module.scss';

import React, { ComponentPropsWithoutRef, FC } from 'react';

export type MainProps = Pick<ComponentPropsWithoutRef<'main'>, 'children'>;

const Main: FC<MainProps> = ({ children }) => (
  <main role="main" styleName="main">
    {children}
  </main>
);

export default Main;
