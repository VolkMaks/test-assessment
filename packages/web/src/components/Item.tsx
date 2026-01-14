import { Stack, Tooltip, Typography } from '@mui/material';
import type { FC, ReactElement } from 'react';

export interface ItemProps {
  id: string;
  relevant?: boolean;
  title: string;
  subTitle?: string;
  info?: string;
  PrefixIcon?: ReactElement;
}

export const Item: FC<ItemProps> = ({
  relevant = false,
  title,
  subTitle,
  info,
  PrefixIcon,
}) => {
  return (
    <Tooltip title={info} placement="top" arrow>
      <Stack
        direction={'row'}
        spacing={1}
        sx={{
          width: 'max-content',
          py: 1,
          px: 1.5,
          borderWidth: '1px',
          borderStyle: 'dashed',
          borderColor: '#9E9E9E',
          backgroundColor: relevant ? 'rgba(0, 0, 0, 0.08)' : undefined,
        }}
      >
        {PrefixIcon}
        <Stack
          sx={{
            justifyContent: 'center',
          }}
        >
          <Typography variant="body3">{title}</Typography>
          {subTitle && <Typography variant="body4">{subTitle}</Typography>}
        </Stack>
      </Stack>
    </Tooltip>
  );
};
