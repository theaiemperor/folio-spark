import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeButton from '../Utils/ThemeButton';


export default function BarMenu({ handleDrawerToggle, Name, navItems }: BarInterface) {
    return (
        <AppBar component="nav">
            <Toolbar >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />

                </IconButton>

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { sm: 'block', fontWeight: 900 } }}
                >
                    {Name}
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item: string) => (
                        <Button key={item} sx={{ color: '#fff', fontWeight: 900 }} >
                            {item}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ ml: 3 }}>
                    <ThemeButton />
                </Box>
            </Toolbar>
        </AppBar>
    )
}
