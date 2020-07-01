import { androidMail } from "react-icons-kit/ionicons/androidMail";
import { blog } from "react-icons-kit/icomoon/blog";
import { cogs } from "react-icons-kit/icomoon/cogs";
import { earth } from "react-icons-kit/icomoon/earth";
import { film } from "react-icons-kit/icomoon/film";
import { home } from "react-icons-kit/icomoon/home";
import { link } from "react-icons-kit/icomoon/link";
import { useMemo } from "react";
import { user } from "react-icons-kit/icomoon/user";

function usePrimaryLinks() {
  const primaryLinks = useMemo(
    () => [
      {
        icon: home,
        text: "Home",
        to: "/",
      },
      {
        icon: user,
        text: "About",
        to: "/about",
      },
      {
        icon: blog,
        text: "Blog",
        to: "/blog",
      },
      {
        icon: androidMail,
        text: "Contact",
        to: "/contact",
      },
      {
        icon: link,
        text: "Link",
        to: "/link",
      },
      {
        icon: film,
        text: "Movie",
        to: "/movie",
      },
      {
        icon: cogs,
        text: "Service",
        to: "/service",
      },
      {
        icon: earth,
        text: "Site",
        to: "/site",
      },
    ],
    []
  );

  return primaryLinks;
}

export default usePrimaryLinks;
