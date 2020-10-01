import "./style.module.scss";

import React, { FC, Fragment, useMemo } from "react";

type Item = {
  description: JSX.IntrinsicElements["dd"]["children"];
  key?: string;
  term: JSX.IntrinsicElements["dt"]["children"];
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
