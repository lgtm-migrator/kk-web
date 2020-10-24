import './style.module.scss';

import React, { FC } from 'react';
import Copyright from 'components/atoms/Copyright';

const Footer: FC = () => (
  <footer styleName="footer">
    <Copyright />
  </footer>
);

export default Footer;
