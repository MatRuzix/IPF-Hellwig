import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import HeaderLink from "./HeaderLink";

const HeaderDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    console.log("bob");
  };

  return (
    <div className="hamburger:visible mobile:visible mobile-xs:visible normalScreen:hidden">
      <Button
        onClick={toggleDrawer(true)}
        className="flex flex-col gap-1.5 p-2 rounded-md bg-gray-100 hover:bg-gray-200"
      >
        <span className="block w-6 h-0.5 bg-black" />
        <span className="block w-6 h-0.5 bg-black" />
        <span className="block w-6 h-0.5 bg-black" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <ListItem disablePadding onClick={toggleDrawer(false)}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <HeaderLink
                  targetId="treatment"
                  text="Nasza oferta"
                  onClick={toggleDrawer(false)}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <HeaderLink
                  targetId="why-us"
                  text="Dlaczego IPF?"
                  onClick={toggleDrawer(false)}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <HeaderLink
                  targetId="team"
                  text="Nasz zespół"
                  onClick={toggleDrawer(false)}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <HeaderLink
                  targetId="cooperations"
                  text="Współprace"
                  onClick={toggleDrawer(false)}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default HeaderDrawer;
