import { Grid, Skeleton } from "@mui/material";

const GRID_COLUMN_COUNT = 12;
const GRID_ITEM_SIZE = 2;
const ITEM_COUNT = GRID_COLUMN_COUNT / GRID_ITEM_SIZE;

export const SectionLoader = () => {
  return (
    <Grid container spacing={1}>
      {Array.from({ length: ITEM_COUNT }).map((_, i) => (
        <Grid size={GRID_ITEM_SIZE} key={i}>
          <Skeleton variant="rectangular" width={"auto"} height={54} />
        </Grid>
      ))}
    </Grid>
  );
};
