import type { FC } from 'react';
import { Box } from '@mui/material';
import { Item, type ItemProps } from './Item';

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
