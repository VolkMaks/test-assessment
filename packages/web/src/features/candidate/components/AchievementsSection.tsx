import { type FC } from 'react';
import { SummarySection } from './SummarySection';
import type { ItemProps } from './Item';
import type { Achievement } from '../types/Achievement';
import { Stars } from '@mui/icons-material';

interface Props {
  title: string;
  achievements?: Achievement[];
  isLoading?: boolean;
}

export const AchievementsSection: FC<Props> = ({
  title,
  achievements = [],
  isLoading = false,
}) => {
  const items = achievements.map((achievement): ItemProps => {
    const props: ItemProps = {
      id: achievement.id,
      title: achievement.title,
      info: achievement.info,
      PrefixIcon: <Stars sx={{ fontSize: '20px', color: '#000000' }} />,
    };

    return props;
  });

  return <SummarySection title={title} items={items} isLoading={isLoading} />;
};
