import React, { FC } from "react";
import { Link } from "gatsby";
import "./style.module.scss";

const Request: FC = ({ children }) => (
  <div styleName="request">
    <div>{children}</div>
    <footer styleName="footer">
      <Link styleName="link" to="/contact">
        依頼してみる →
      </Link>
    </footer>
  </div>
);

export default Request;
