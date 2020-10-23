import "./style.module.scss";

import { Link } from "gatsby";
import React, { FC } from "react";

const Request: FC = ({ children }) => (
  <div>
    <div>{children}</div>
    <footer styleName="footer">
      <Link styleName="link" to="/contact">
        依頼してみる →
      </Link>
    </footer>
  </div>
);

export default Request;
