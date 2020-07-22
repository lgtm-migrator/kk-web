import "./style.module.scss";

import React, { FC } from "react";

import Markdown, { MarkdownProps } from "components/molecules/Markdown";

export type BlogProps = Pick<MarkdownProps, "handleCopy" | "source"> & {
  date: JSX.IntrinsicElements["div"]["children"];
  heading: JSX.IntrinsicElements["div"]["children"];
};

const Blog: FC<BlogProps> = ({ date, handleCopy, heading, source }) => (
  <article styleName="blog">
    <div styleName="heading-wrapper">{heading}</div>
    <div styleName="date-wrapper">{date}</div>
    <Markdown handleCopy={handleCopy} source={source} />
  </article>
);

export default Blog;
