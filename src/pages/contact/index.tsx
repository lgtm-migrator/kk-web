import { yupResolver } from "@hookform/resolvers";
import { PageProps } from "gatsby";
import React, { FC, useCallback, useMemo, useEffect } from "react";
import { useForm, Resolver } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useFetch from "use-http";
import * as yup from "yup";

import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Textarea from "components/atoms/Textarea";
import ContactForm, {
  ContactFormProps,
} from "components/organisms/ContactForm";
import Layout from "components/templates/Layout";
import Seo from "components/templates/Seo";

type FieldValues = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

export type ContactProps = PageProps;

const Contact: FC<ContactProps> = () => {
  const resolver = useMemo<Resolver<FieldValues>>(
    () =>
      yupResolver(
        yup.object().shape({
          email: yup
            .string()
            .email("Invalid Email Address")
            .required("Email Is Required"),
          message: yup.string().required("Message Is Required"),
          name: yup.string().required("Name Is Required"),
        })
      ),
    []
  );
  const { handleSubmit: handleSubmitUseForm, register } = useForm<FieldValues>({
    resolver,
  });
  const { error, loading, post, response } = useFetch(
    process.env.GATSBY_BASE_URL
  );
  const callback = useCallback<Parameters<typeof handleSubmitUseForm>[0]>(
    async ({ email, message: text, name, subject }) => {
      await post("/sendMail", {
        email,
        name,
        subject,
        text,
      });

      const { ok } = response;

      if (!ok) {
        return;
      }

      toast.success("Send Success Email!");
    },
    [post, response]
  );
  const items = useMemo<ContactFormProps["items"]>(
    () => [
      {
        description: <Input name="name" ref={register({ required: true })} />,
        term: "Name*",
      },
      {
        description: <Input name="email" ref={register({ required: true })} />,
        term: "Email*",
      },
      {
        description: <Input name="subject" ref={register} />,
        term: "Subject",
      },
      {
        description: (
          <Textarea name="message" ref={register({ required: true })} />
        ),
        term: "Message*",
      },
    ],
    [register]
  );
  const formCallback = useCallback<ContactFormProps["callback"]>(
    (children) => (
      <form onSubmit={handleSubmitUseForm(callback)}>{children}</form>
    ),
    [callback, handleSubmitUseForm]
  );

  useEffect(() => {
    if (!error) {
      return;
    }

    toast.error("An Unknown Network Error Has Occurred");
  }, [error]);

  return (
    <>
      <Seo path="/contact" title="Contact" />
      <Layout>
        <ContactForm
          callback={formCallback}
          items={items}
          submitButton={
            <Button disabled={loading} type="submit">
              Submit
            </Button>
          }
        />
        <ToastContainer pauseOnFocusLoss={false} position="bottom-right" />
      </Layout>
    </>
  );
};

export default Contact;
