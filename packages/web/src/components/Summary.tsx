import { Box, Stack } from '@mui/material';
import React, { type ReactElement } from 'react';
import { useCandidateSummaryQuery } from '../hooks/useCandidateSummaryQuery';
import { useProfileQuery } from '../hooks/useProfileQuery';
import { AchievementsSection } from './AchievementsSection';
import { ErrorAlert } from './ErrorAlert';
import { Header } from './Header';
import { Paragraph } from './Paragraph';
import { TechnologySection } from './TechnologySection';

export const Summary = () => {
  const {
    isLoading,
    error: candidateError,
    data: candidate,
    refetch: refetchCandidate,
  } = useCandidateSummaryQuery();

  const {
    error: profileError,
    data: profileSkills,
    refetch: refetchProfile,
  } = useProfileQuery();

  let content: ReactElement | null = null;

  if (!isLoading && candidateError) {
    content = (
      <ErrorAlert message={candidateError.message} onRetry={refetchCandidate} />
    );
  } else {
    content = (
      <React.Fragment>
        {profileError && (
          <ErrorAlert message={profileError.message} onRetry={refetchProfile} />
        )}
        <Paragraph text={candidate?.summary} isLoading={isLoading} />
        <TechnologySection
          title="Main technologies"
          profileSkills={profileSkills}
          skills={candidate?.mainTechnologies}
          isLoading={isLoading}
        />
        <TechnologySection
          title="Additional skills"
          profileSkills={profileSkills}
          skills={candidate?.additionalSkills}
          isLoading={isLoading}
        />
        <AchievementsSection
          title="Rewards and achievements"
          achievements={candidate?.achievements}
          isLoading={isLoading}
        />
      </React.Fragment>
    );
  }

  return (
    <Box
      sx={theme => ({
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: { px: '80px' },
      })}
    >
      <Stack
        component={'section'}
        sx={{ width: 800, py: 8, minHeight: '100vh' }}
        spacing={4}
      >
        <Header />
        {content}
      </Stack>
    </Box>
  );
};
