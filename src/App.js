import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper } from "@mui/material";
import Sidenav from "./components/Sidenav/Sidenav";
function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleThemeChange = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <Paper elevation={0} sx={{height: "100vh"}} square>
        <Sidenav handleThemeChange={handleThemeChange} mode={mode}/>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
