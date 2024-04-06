import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";


export default function ThemeButton() {

    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMode}
                color="inherit"
            >
                {
                    darkMode ? <LightModeOutlined /> : <DarkModeOutlined />
                }
            </IconButton>
        </div>
    )
}
