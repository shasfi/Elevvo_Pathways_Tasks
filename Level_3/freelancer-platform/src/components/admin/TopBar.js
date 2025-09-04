import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Badge, 
  Menu, 
  MenuItem, 
  Avatar, 
  Box,
  Divider,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Circle as CircleIcon
} from '@mui/icons-material';
import { deepOrange } from '@mui/material/colors';

const notifications = [
  { id: 1, text: 'New project assigned: E-commerce Website', time: '2 min ago', read: false },
  { id: 2, text: 'Payment received for Project X', time: '1 hour ago', read: false },
  { id: 3, text: 'New message from John Doe', time: '3 hours ago', read: true },
];

const TopBar = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [unreadCount] = useState(notifications.filter(n => !n.read).length);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setNotificationAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        width: { md: `calc(100% - 240px)` }, 
        ml: { md: '240px' },
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}
      color="inherit"
      elevation={0}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label={`show ${unreadCount} new notifications`}
            color="inherit"
            onClick={handleNotificationMenuOpen}
          >
            <Badge badgeContent={unreadCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          
          <Menu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                width: 350,
                maxWidth: '100%',
                mt: 1.5,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
              <Typography variant="subtitle1" fontWeight="500">Notifications</Typography>
            </Box>
            {notifications.map((notification) => (
              <MenuItem key={notification.id} sx={{ py: 1.5, borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CircleIcon color={notification.read ? 'disabled' : 'primary'} fontSize="small" />
                </ListItemIcon>
                <Box>
                  <Typography variant="body2" color="text.primary">
                    {notification.text}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {notification.time}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
            <Box sx={{ p: 1.5, textAlign: 'center' }}>
              <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                View all notifications
              </Typography>
            </Box>
          </Menu>
          
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ ml: 1 }}
          >
            <Avatar sx={{ bgcolor: deepOrange[500], width: 36, height: 36 }}>A</Avatar>
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                width: 200,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                mt: 1.5,
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle2">Admin User</Typography>
              <Typography variant="caption" color="text.secondary">admin@example.com</Typography>
            </Box>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
