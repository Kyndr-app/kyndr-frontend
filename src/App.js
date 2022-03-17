import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "flag-icons/css/flag-icons.min.css";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

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
    fontFamily: ["DM Sans", "Roboto", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
});
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}

export default App;
