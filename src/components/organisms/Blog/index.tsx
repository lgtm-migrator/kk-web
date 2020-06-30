import "./style.module.scss";

import Markdown, { MarkdownProps } from "components/molecules/Markdown";
import React, { FC } from "react";

export type BlogProps = Pick<MarkdownProps, "html"> & {
  date: JSX.IntrinsicElements["div"]["children"];
  heading: JSX.IntrinsicElements["div"]["children"];
};

const Blog: FC<BlogProps> = ({ date, heading, html }) => (
  <article styleName="blog">
    <div styleName="heading-wrapper">{heading}</div>
    <div styleName="date-wrapper">{date}</div>
    <Markdown html={html} />
  </article>
);

export default Blog;
