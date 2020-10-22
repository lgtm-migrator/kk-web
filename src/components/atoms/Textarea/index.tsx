import "./style.module.scss";

import React, { ComponentPropsWithRef, FC, forwardRef } from "react";

export type TextareaProps = Pick<
  ComponentPropsWithRef<"textarea">,
  "name" | "ref"
>;

const Textarea: FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ name }, ref) => <textarea name={name} ref={ref} styleName="textarea" />);

export default Textarea;
