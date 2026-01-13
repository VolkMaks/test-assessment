import { Typography } from "@mui/material";
import type { FC } from "react";

interface Props {
  text: string;
}

export const Paragraph: FC<Props> = ({ text }) => {
  return <Typography variant="body2">{text}</Typography>;
};
