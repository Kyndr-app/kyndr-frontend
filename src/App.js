import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFC0CA",
      main: "#F16178",
    },
    secondary: {
      main: "#9BD739",
      light: "#9ad6384d",
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "30px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Raleway", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
});
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
