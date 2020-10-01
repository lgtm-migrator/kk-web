import "./style.module.scss";

import React, { FC } from "react";

import DefinitionList, {
  DefinitionListProps,
} from "components/molecules/DefinitionList";

export type BlogListBlockProps = Pick<DefinitionListProps, "items">;

const BlogListBlock: FC<BlogListBlockProps> = ({ items }) => (
  <div styleName="blog-list-block">
    <DefinitionList items={items} />
  </div>
);

export default BlogListBlock;
