import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Main from "./pages/Main";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
