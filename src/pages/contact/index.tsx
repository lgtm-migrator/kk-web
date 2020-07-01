import * as yup from "yup";
import React, { FC, useCallback, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { PageProps } from "gatsby";
import axios from "axios";
import { useForm } from "react-hook-form";

import ContactForm, {
  ContactFormProps,
} from "components/organisms/ContactForm";
import Input, { InputProps } from "components/atoms/Input";
import Textarea, { TextareaProps } from "components/atoms/Textarea";
import Button, { ButtonProps } from "components/atoms/Button";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

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
  const [isSubmitting, setIsSubmitting] = useState<ButtonProps["disabled"]>(
    false
  );
  const { handleSubmit: handleSubmitUseForm, register } = useForm<{
    email: string;
    message: string;
    name: string;
    subject: string;
  }>({ validationSchema });
  const callback = useCallback<Parameters<typeof handleSubmitUseForm>[0]>(
    ({ email, message: text, name, subject }) => {
      setIsSubmitting(true);

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
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [setIsSubmitting]
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
    [emailRef, messageRef, nameRef, register]
  );
  const formCallback = useCallback<ContactFormProps["callback"]>(
    (children) => <form onSubmit={handleSubmit}>{children}</form>,
    [handleSubmit]
  );

  return (
    <>
      <Seo path="/contact" title="Contact" />
      <Layout>
        <ContactForm
          callback={formCallback}
          items={items}
          submitButton={
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          }
        />
        <ToastContainer position="bottom-right" />
      </Layout>
    </>
  );
};

export default Contact;
