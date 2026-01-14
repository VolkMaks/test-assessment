import { Skeleton, Typography } from '@mui/material';
import type { FC } from 'react';

interface Props {
  text?: string;
  isLoading?: boolean;
}

export const Paragraph: FC<Props> = ({ text, isLoading = false }) => {
  return isLoading ? (
    <Skeleton variant="rectangular" height={'88px'} />
  ) : (
    <Typography variant="body2">{text}</Typography>
  );
};
