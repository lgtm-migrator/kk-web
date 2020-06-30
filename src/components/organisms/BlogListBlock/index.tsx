import "./style.module.scss";

import DefinitionList, {
  DefinitionListProps,
} from "components/molecules/DefinitionList";
import React, { FC } from "react";

export type BlogListBlockProps = Pick<DefinitionListProps, "items"> & {};

const BlogListBlock: FC<BlogListBlockProps> = ({ items }) => (
  <div styleName="blog-list-block">
    <DefinitionList items={items} />
  </div>
);

export default BlogListBlock;
