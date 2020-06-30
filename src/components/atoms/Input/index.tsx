import "./style.module.scss";

import React, { FC } from "react";

export type InputProps = Pick<JSX.IntrinsicElements["input"], "name"> & {
  inputRef: JSX.IntrinsicElements["input"]["ref"];
};

const Input: FC<InputProps> = ({ name, inputRef }) => (
  <input name={name} ref={inputRef} styleName="input" />
);

export default Input;
