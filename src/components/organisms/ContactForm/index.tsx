import "./style.module.scss";

import DefinitionList, {
  DefinitionListProps,
} from "components/molecules/DefinitionList";
import React, { FC, ReactNode } from "react";

export type ContactFormProps = Pick<DefinitionListProps, "items"> & {
  callback: (children: ReactNode) => ReactNode;
  submitButton: JSX.IntrinsicElements["button"]["children"];
};

const ContactForm: FC<ContactFormProps> = ({
  callback,
  items,
  submitButton,
}) => {
  const children = callback(
    <div styleName="formInner">
      <div styleName="definition-list-wrapper">
        <DefinitionList items={items} />
      </div>
      <div>{submitButton}</div>
    </div>
  );

  return <div styleName="contact-form">{children}</div>;
};

export default ContactForm;
