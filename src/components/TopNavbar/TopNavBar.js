import React, { useState } from 'react';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import './TopNavBar.css';

function TopNavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerItems = [
    { text: 'Real-Time Monitoring', path: '/real-time-monitoring' },
    { text: 'Incident Reporting', path: '/incident-reporting' },
    { text: 'Analytics Dashboard', path: '/analytics-dashboard' },
    { text: 'User Settings', path: '/user-settings' },
    { text: 'Alert System', path: '/alert-system' } // Add Alert System to menu
  ];

  return (
    <nav className="top-navbar">
      <div className="logo">Women Safety Dashboard</div>
      <div className="controls">
        <IconButton onClick={toggleDrawer} color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            {drawerItems.map((item) => (
              <ListItem button key={item.text} onClick={toggleDrawer} component={Link} to={item.path}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div className="user-profile">
          <AccountCircleIcon />
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
