import './style.module.scss';

import React, { ComponentPropsWithRef, FC, forwardRef } from 'react';

export type InputProps = Pick<ComponentPropsWithRef<'input'>, 'name' | 'ref'>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ name }, ref) => <input ref={ref} name={name} styleName="input" />,
);

export default Input;
