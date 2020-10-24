import './style.module.scss';

import React, { ComponentPropsWithoutRef, FC } from 'react';
import Markdown, { MarkdownProps } from 'components/molecules/Markdown';

export type BlogProps = Pick<MarkdownProps, 'handleCopy' | 'source'> & {
  date: ComponentPropsWithoutRef<'div'>['children'];
  heading: ComponentPropsWithoutRef<'div'>['children'];
};

const Blog: FC<BlogProps> = ({
  date, handleCopy, heading, source,
}) => (
  <article styleName="blog">
    <div styleName="heading-wrapper">{heading}</div>
    <div styleName="date-wrapper">{date}</div>
    <Markdown handleCopy={handleCopy} source={source} />
  </article>
);

export default Blog;
