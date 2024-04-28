import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerMenu({
  container,
  open,
  handleDrawerToggle,
  Name,
  navItems,
}: DrawerInterface) {
  const drawerWidth = 240;

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography variant="h6">{Name}</Typography>
          <Divider />
          <List>
            {navItems.map((item: string) => (
              <Link to={item === "Home" ? "/" : item} key={item}>
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      textAlign: "center",
                      border: "solid",
                      m: 1,
                      borderRadius: 3,
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}
