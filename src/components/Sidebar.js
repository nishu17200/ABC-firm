import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: 'sidebar' }}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Button
          onClick={toggleSidebar}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', pl: 1 }}
        >
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>

        {isSidebarOpen && (
          <>
            <List sx={{ width: 250 }}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Mail" />
              </ListItem>
            </List>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '92%', backgroundColor: 'blue', padding: '10px', textAlign: 'center' }}>
              <p>Upgrade Now</p>
              <Button variant="contained" color="secondary">
                Upgrade
              </Button>
            </div>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Sidebar;
