import './style.module.scss';

import React, {
  ComponentPropsWithoutRef, FC, Fragment, useMemo,
} from 'react';
import uniqid from 'uniqid';

type Item = {
  description: ComponentPropsWithoutRef<'dd'>['children'];
  key?: string;
  term: ComponentPropsWithoutRef<'dt'>['children'];
};

export type DefinitionListProps = {
  items: Item[];
};

const DefinitionList: FC<DefinitionListProps> = ({ items }) => {
  const children = useMemo(
    () => items.map(({ description, key, term }) => (
      <Fragment key={key || uniqid()}>
        <dt styleName="term">{term}</dt>
        <dd>{description}</dd>
      </Fragment>
    )),
    [items],
  );

  return <dl>{children}</dl>;
};

export default DefinitionList;
