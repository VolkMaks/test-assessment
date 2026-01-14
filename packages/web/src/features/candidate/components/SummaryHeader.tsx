import { Box, Stack, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/InfoOutline';

export const SummaryHeader = () => {
  return (
    <Box
      sx={theme => ({
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          gap: 2,
        },
      })}
    >
      <Typography
        variant="h4"
        sx={{
          backgroundImage:
            'linear-gradient(0deg, #DCFF02 0.47em, transparent 0.47em)',
          px: '3px',
          mixBlendMode: 'darken',
          color: '#000000',
          width: 'max-content',
        }}
      >
        Summary
      </Typography>
      <Stack
        direction={'row'}
        spacing={0.5}
        sx={{
          color: '#00000061',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AccessAlarmIcon sx={{ fontSize: '22px' }} />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.4px',
          }}
        >
          Relevant skills are highlighted
        </Typography>
      </Stack>
    </Box>
  );
};
