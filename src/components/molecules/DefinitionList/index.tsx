import "./style.module.scss";

import React, { FC, Fragment, useMemo } from "react";

type Item = {
  description: JSX.IntrinsicElements["dd"]["children"];
  term: Extract<JSX.IntrinsicElements["dt"]["children"], string>;
};

export type DefinitionListProps = {
  items: Item[];
};

const DefinitionList: FC<DefinitionListProps> = ({ items }) => {
  const children = useMemo(
    () =>
      items.map(({ description, term }) => (
        <Fragment key={term}>
          <dt styleName="term">{term}</dt>
          <dd>{description}</dd>
        </Fragment>
      )),
    [items]
  );

  return <dl styleName="definition-list">{children}</dl>;
};

export default DefinitionList;
