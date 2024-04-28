import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const darkMode = useAppSelector((state) => state.darkMode.value);

  const Theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
