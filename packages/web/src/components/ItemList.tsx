import type { FC } from 'react';
import { Item, type ItemProps } from './Item';
import { Box } from '@mui/material';

interface Props {
  items: ItemProps[];
}

export const ItemList: FC<Props> = ({ items }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </Box>
  );
};
