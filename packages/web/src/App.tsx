import "@fontsource/outfit/100.css";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/outfit/900.css";
import { Box, Stack } from "@mui/material";
import { Header } from "./components/Header";
import { Paragraph } from "./components/Paragraph";
import { Providers } from "./components/Providers";
// import { SummarySection } from "./components/SummarySection";

function App() {
  return (
    <Providers>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          component={"section"}
          sx={{ width: 800, py: 8, minHeight: "100vh" }}
          spacing={4}
        >
          <Header />
          <Paragraph text={"Test"} />
          {/* <SummarySection title="Main technologies" />
          <SummarySection title="Additional skills" />
          <SummarySection title="Rewards and achievements" /> */}
        </Stack>
      </Box>
    </Providers>
  );
}

export default App;
