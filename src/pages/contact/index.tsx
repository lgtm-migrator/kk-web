import * as yup from "yup";

import ContactForm, {
  ContactFormProps,
} from "components/organisms/ContactForm";
import Input, { InputProps } from "components/atoms/Input";
import React, { FC, Fragment, useCallback, useMemo } from "react";
import Textarea, { TextareaProps } from "components/atoms/Textarea";
import { ToastContainer, toast } from "react-toastify";

import Button from "components/atoms/Button";
import Layout from "components/templates/Layout";
import { PageProps } from "gatsby";
import Seo from "components/templates/Seo";
import axios from "axios";
import { useForm } from "react-hook-form";

export type ContactProps = PageProps;

const Contact: FC<ContactProps> = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .email("Invalid Email Address")
          .required("Email Is Required"),
        message: yup.string().required("Message Is Required"),
        name: yup.string().required("Name Is Required"),
      }),
    []
  );
  const { handleSubmit: handleSubmitUseForm, register } = useForm<{
    email: string;
    message: string;
    name: string;
    subject: string;
  }>({ validationSchema });
  const callback = useCallback<Parameters<typeof handleSubmitUseForm>[0]>(
    ({ email, message: text, name, subject }) => {
      axios
        .post(`${process.env.BASE_URL}/sendMail`, {
          email,
          name,
          subject,
          text,
        })
        .then(() => {
          toast.success("Send Success Email!");
        })
        .catch(() => {
          toast.error("An Unknown Network Error Has Occurred");
        });
    },
    []
  );
  const handleSubmit = useCallback<
    NonNullable<JSX.IntrinsicElements["form"]["onSubmit"]>
  >(handleSubmitUseForm(callback), [callback, handleSubmitUseForm]);
  const nameRef = useMemo<InputProps["inputRef"]>(
    () => register({ required: true }),
    [register]
  );
  const emailRef = useMemo<InputProps["inputRef"]>(
    () => register({ required: true }),
    [register]
  );
  const messageRef = useMemo<TextareaProps["textareaRef"]>(
    () => register({ required: true }),
    [register]
  );
  const items = useMemo<ContactFormProps["items"]>(
    () => [
      {
        description: <Input inputRef={nameRef} name="name" />,
        term: "Name*",
      },
      {
        description: <Input inputRef={emailRef} name="email" />,
        term: "Email*",
      },
      {
        description: <Input inputRef={register} name="subject" />,
        term: "Subject",
      },
      {
        description: <Textarea name="message" textareaRef={messageRef} />,
        term: "Message*",
      },
    ],
    []
  );
  const formCallback = useCallback<ContactFormProps["callback"]>(
    (children) => <form onSubmit={handleSubmit}>{children}</form>,
    []
  );

  return (
    <Fragment>
      <Seo title="Contact" />
      <Layout>
        <ContactForm
          callback={formCallback}
          items={items}
          submitButton={<Button type="submit">Submit</Button>}
        />
        <ToastContainer position="bottom-right" />
      </Layout>
    </Fragment>
  );
};

export default Contact;
