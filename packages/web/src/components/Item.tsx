import { Stack, Tooltip, Typography, type IconProps } from "@mui/material";
import type { FC } from "react";

export interface ItemProps {
  relevant?: boolean;
  title: string;
  subTitle?: string;
  details?: string;
  PrefixIcon?: FC<IconProps>;
}

export const Item: FC<ItemProps> = ({
  relevant = false,
  title,
  subTitle,
  details,
  PrefixIcon,
}) => {
  return (
    <Tooltip title={details} placement="top" arrow>
      <Stack direction={"row"} spacing={1}>
        {PrefixIcon && <PrefixIcon />}
        <Stack
          sx={{
            width: "max-content",
            py: 1,
            px: 1.5,
            borderWidth: "1px",
            borderStyle: "dashed",
            borderColor: "#9E9E9E",
            backgroundColor: relevant ? "rgba(0, 0, 0, 0.08)" : undefined,
          }}
        >
          <Typography variant="body3">{title}</Typography>
          {subTitle && <Typography variant="body4">{subTitle}</Typography>}
        </Stack>
      </Stack>
    </Tooltip>
  );
};
