import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../components/admin/Sidebar';
import TopBar from '../components/admin/TopBar';

const drawerWidth = 240;

const AdminLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <TopBar 
        drawerWidth={drawerWidth} 
        handleDrawerToggle={handleDrawerToggle} 
        isMobile={isMobile} 
      />
      
      <Sidebar 
        drawerWidth={drawerWidth} 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle} 
        isMobile={isMobile} 
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: '#f5f7fa',
        }}
      >
        <Toolbar /> {/* This pushes content below the AppBar */}
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
