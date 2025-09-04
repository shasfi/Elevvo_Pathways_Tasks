import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Work as ProjectsIcon,
  Person as ProfileIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin' },
  { text: 'Projects', icon: <ProjectsIcon />, path: '/admin/projects' },
  { text: 'Profile', icon: <ProfileIcon />, path: '/admin/profile' },
];

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        {!isMobile && (
          <ChevronLeftIcon onClick={handleDrawerClose} sx={{ cursor: 'pointer' }} />
        )}
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={Link} 
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.12)',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: open ? drawerWidth : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: open ? drawerWidth : 0,
              boxSizing: 'border-box',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
              overflowX: 'hidden',
            },
          }}
          open={open}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
