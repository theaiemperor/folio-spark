import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, useMediaQuery } from "@mui/material";
import { toggle } from "../../../store/Redux/darkMode";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
export default function ThemeButton() {
  const darkMode = useAppSelector((state) => state.darkMode.value);
  const dispatch = useAppDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  function handleThemeChange() {
    dispatch(toggle());
  }

  useEffect(() => {
    handleThemeChange();
  }, [prefersDarkMode]);

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleThemeChange}
        color="inherit"
      >
        {darkMode ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </div>
  );
}
