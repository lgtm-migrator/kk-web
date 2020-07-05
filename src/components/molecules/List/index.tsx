import React, { FC, useMemo } from "react";
import uniqid from "uniqid";
import "./style.module.scss";

export type ListProps = {
  items: JSX.IntrinsicElements["li"]["children"][];
};

const List: FC<ListProps> = ({ items }) => {
  const children = useMemo(
    () => items.map((value) => <li key={uniqid()}>{value}</li>),
    [items]
  );

  return <ul styleName="list">{children}</ul>;
};

export default List;
