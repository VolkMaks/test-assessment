import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import { Box, Stack } from '@mui/material';
import { Header } from './components/Header';
import { Paragraph } from './components/Paragraph';
import { useCandidateSummaryQuery } from './hooks/useCandidateSummaryQuery';
import { useProfileQuery } from './hooks/useProfileQuery';
import { TechnologySection } from './components/TechnologySection';
import { AchievementsSection } from './components/AchievementsSection';
import type { ReactElement } from 'react';
import React from 'react';
import { ErrorAlert } from './components/ErrorAlert';

function App() {
  const {
    isLoading: isLoadingSummary,
    error: summaryError,
    parsedData: parsedSummary,
    refetch: refetchSummary,
  } = useCandidateSummaryQuery();

  const {
    isLoading: isLoadingProfile,
    error: profileError,
    parsedData: profileSkills,
    refetch: refetchProfile,
  } = useProfileQuery();

  const isLoading = isLoadingSummary || isLoadingProfile;

  let content: ReactElement | null = null;

  if (!isLoadingSummary && summaryError) {
    content = (
      <ErrorAlert message={summaryError.message} onRetry={refetchSummary} />
    );
  } else {
    content = (
      <React.Fragment>
        {profileError && (
          <ErrorAlert message={profileError.message} onRetry={refetchProfile} />
        )}
        <Paragraph text={parsedSummary.summary} isLoading={isLoading} />
        <TechnologySection
          title="Main technologies"
          profileSkills={profileSkills}
          skills={parsedSummary?.mainTechnologies}
          isLoading={isLoading}
        />
        <TechnologySection
          title="Additional skills"
          profileSkills={profileSkills}
          skills={parsedSummary?.additionalSkills}
          isLoading={isLoading}
        />
        <AchievementsSection
          title="Rewards and achievements"
          achievements={parsedSummary?.achievements}
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
}

export default App;
