import { Stack, Typography } from "@mui/material";
import type { FC } from "react";
import { type ItemProps } from "./Item";
import { ItemList } from "./ItemList";
import { SectionLoader } from "./SectionLoader";

interface Props {
  title: string;
  items: ItemProps[];
  isLoading?: boolean;
}

export const SummarySection: FC<Props> = ({
  title,
  items,
  isLoading = false,
}) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">{title}</Typography>
      {isLoading ? <SectionLoader /> : <ItemList items={items} />}
    </Stack>
  );
};
