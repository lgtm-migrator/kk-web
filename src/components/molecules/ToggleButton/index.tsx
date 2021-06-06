/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './style.module.scss';

import { Icon } from 'react-icons-kit';
import { iosLightbulb } from 'react-icons-kit/ionicons/iosLightbulb';
import React, { ComponentPropsWithoutRef, FC } from 'react';

export type ToggleButtonProps = Pick<
  ComponentPropsWithoutRef<'input'>,
  'checked'
> & {
  handleChange: ComponentPropsWithoutRef<'input'>['onChange'];
};

const ToggleButton: FC<ToggleButtonProps> = ({ checked, handleChange }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label styleName="toggle-button">
    <input
      checked={checked}
      onChange={handleChange}
      styleName="checkbox"
      type="checkbox"
    />
    <Icon icon={iosLightbulb} size={18} />
  </label>
);

export default ToggleButton;
