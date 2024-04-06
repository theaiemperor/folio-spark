import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './Utils/ScrollTop';
import { useState } from 'react';
import DrawerMenu from './Drawer/DrawerMenu';
import BarMenu from './Bar/BarMenu';


export default function Navbar(props: navigationProps) {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window.document.body : undefined;

    const navItems = ['Home', 'About', 'Contact'];
    const Name = "Folio spark";

    return (
        <Box>
            <CssBaseline />
            <div id="back-to-top-anchor" />


            {/* For Desktops or wider screens */}
            <BarMenu handleDrawerToggle={handleDrawerToggle} Name={Name} navItems={navItems} />


            {/* For Mobile Devices */}
            <DrawerMenu handleDrawerToggle={handleDrawerToggle} Name={Name} navItems={navItems} container={container} open={mobileOpen}/>


            <Box component="main">
                <Toolbar />
            </Box>


            {/* For Going back to top of the page */}
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>

        </Box>
    );
}
