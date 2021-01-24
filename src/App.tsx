import React, { useState } from "react";
import "./App.css";
import {
  Grid,
  ThemeProvider,
  createMuiTheme,
  colors,
  CssBaseline,
  Container,
} from "@material-ui/core";

import Header from "./components/Header";
import FormStepper from "./components/FormStepper";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#002884" : colors.indigo[500],
      },
      secondary: {
        main: darkMode ? '#ba000d' : colors.pink['A400']
      }
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Container>
            <Grid container justify="center" style={{ margin: '50px 0px' }}>
              <Grid item xs={12} md={8}>
                <FormStepper />
              </Grid>
            </Grid>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
