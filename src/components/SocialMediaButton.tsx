import React from "react";
import { IconButton, IconButtonProps, Link } from "@chakra-ui/react";

export type SocialMediaButtonProps = IconButtonProps & {
  href: string;
  mode?: "dark" | "light";
};

const SocialMediaButton = ({
  href,
  mode,
  ...iconButtonProps
}: SocialMediaButtonProps) => (
  <Link
    href={href}
    _hover={{ textDecoration: "none" }}
    borderRadius="full"
    tabIndex={-1}
  >
    <IconButton borderRadius="full" {...iconButtonProps} />
  </Link>
);

export default SocialMediaButton;