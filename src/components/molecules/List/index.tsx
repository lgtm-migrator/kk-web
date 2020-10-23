import "./style.module.scss";

import React, { ComponentPropsWithoutRef, FC, useMemo } from "react";
import uniqid from "uniqid";

export type ListProps = {
  items: ComponentPropsWithoutRef<"li">["children"][];
};

const List: FC<ListProps> = ({ items }) => {
  const children = useMemo(
    () => items.map((value) => <li key={uniqid()}>{value}</li>),
    [items]
  );

  return <ul styleName="list">{children}</ul>;
};

export default List;
