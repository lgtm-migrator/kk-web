import React, { FC, useMemo } from "react";
import "./style.module.scss";

type Item = {
  description: JSX.IntrinsicElements["dd"]["children"];
  term: Extract<JSX.IntrinsicElements["dt"]["children"], string>;
};

export type SkillListProps = {
  items: Item[];
};

const SkillList: FC<SkillListProps> = ({ items }) => {
  const children = useMemo(
    () =>
      items.map(({ description, term }) => (
        <div key={term} styleName="wrapper">
          <dt styleName="term">{term}</dt>
          <dd styleName="description">{description}</dd>
        </div>
      )),
    [items]
  );

  return <dl styleName="skill-list">{children}</dl>;
};

export default SkillList;
