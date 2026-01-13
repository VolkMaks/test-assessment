import { Grid, Stack, Typography } from "@mui/material";
import type { FC } from "react";
import { Item, type ItemProps } from "./Item";

interface Props {
  title: string;
  items: ItemProps[];
}

export const SummarySection: FC<Props> = ({ title, items }) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h6">{title}</Typography>
      <Grid container spacing={8}>
        {items.map((item) => (
          <Grid size={"auto"}>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
