import "./style.module.scss";

import React, { FC } from "react";

export type MarkdownProps = {
  html: NonNullable<
    JSX.IntrinsicElements["div"]["dangerouslySetInnerHTML"]
  >["__html"];
};

const Markdown: FC<MarkdownProps> = ({ html }) => (
  <div
    className="markdown-body"
    dangerouslySetInnerHTML={{
      __html: html,
    }}
    styleName="markdown"
  />
);

export default Markdown;
