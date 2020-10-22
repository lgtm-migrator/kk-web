import "./style.module.scss";

import React, { ComponentPropsWithoutRef, FC, Fragment, useMemo } from "react";

type Item = {
  description: ComponentPropsWithoutRef<"dd">["children"];
  key?: string;
  term: ComponentPropsWithoutRef<"dt">["children"];
};

export type DefinitionListProps = {
  items: Item[];
};

const DefinitionList: FC<DefinitionListProps> = ({ items }) => {
  const children = useMemo(
    () =>
      items.map(({ description, key, term }) => (
        <Fragment key={key || term}>
          <dt styleName="term">{term}</dt>
          <dd>{description}</dd>
        </Fragment>
      )),
    [items]
  );

  return <dl styleName="definition-list">{children}</dl>;
};

export default DefinitionList;
