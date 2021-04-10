import React from "react";
import { Button, ButtonProps, Link } from "@chakra-ui/react";

type LinkButtonProps = ButtonProps & { href: string };
const LinkButton = ({ href, children, ...buttonProps }: LinkButtonProps) => (
  <Link href={href} _hover={{ textDecoration: "none" }} tabIndex={-1}>
    <Button {...buttonProps}>{children}</Button>
  </Link>
);

export default LinkButton;