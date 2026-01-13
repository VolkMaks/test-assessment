import { Box, Stack, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/InfoOutline";

export const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant="h4"
        sx={{
          backgroundImage:
            "linear-gradient(0deg, #DCFF02 0.47em, transparent 0.47em)",
          px: "3px",
          mixBlendMode: "darken",
          color: "black",
        }}
      >
        Summary
      </Typography>
      <Stack
        direction={"row"}
        spacing={0.5}
        sx={{
          color: "rgba(0, 0, 0, 0.38)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AccessAlarmIcon sx={{ fontSize: 22 }} />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.4px",
          }}
        >
          Relevant skills are highlighted
        </Typography>
      </Stack>
    </Box>
  );
};
