import "./style.module.scss";

import React, { FC } from "react";

export type TextareaProps = Pick<JSX.IntrinsicElements["textarea"], "name"> & {
  textareaRef: JSX.IntrinsicElements["textarea"]["ref"];
};

const Textarea: FC<TextareaProps> = ({ name, textareaRef }) => (
  <textarea name={name} ref={textareaRef} styleName="textarea" />
);

export default Textarea;
