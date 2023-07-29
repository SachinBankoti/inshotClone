import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box, styled } from "@mui/material";
import Articles from "./components/Articles";

const Container = styled(Box)`
  width: 60%;
  margin: 35px auto 0 auto;
`;
const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
};

export default App;
