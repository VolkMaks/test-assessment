import { type FC } from 'react';
import type { Skill } from '../types/Skill';
import { SummarySection } from './SummarySection';
import type { ItemProps } from './Item';
import pluralize from 'pluralize';

interface Props {
  title: string;
  skills?: Skill[];
  profileSkills?: Set<string>;
  isLoading?: boolean;
}

export const TechnologySection: FC<Props> = ({
  title,
  skills = [],
  isLoading = false,
  profileSkills,
}) => {
  const items = skills.map((skill): ItemProps => {
    const props: ItemProps = {
      id: skill.id,
      title: skill.title,
    };

    if (skill.yearsOfExperience) {
      props.subTitle = pluralize('Year', skill.yearsOfExperience, true);
    }

    if (profileSkills?.has(skill.title)) {
      props.relevant = true;
      props.info = 'Relevant skill';
    }

    return props;
  });

  return <SummarySection title={title} items={items} isLoading={isLoading} />;
};
