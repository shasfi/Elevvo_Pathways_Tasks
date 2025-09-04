import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import {
  Assignment as AssignmentIcon,
  AttachMoney as MoneyIcon,
  CheckCircle as CheckCircleIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', earnings: 4000, projects: 2 },
  { name: 'Feb', earnings: 3000, projects: 1 },
  { name: 'Mar', earnings: 2000, projects: 3 },
  { name: 'Apr', earnings: 2780, projects: 2 },
  { name: 'May', earnings: 1890, projects: 4 },
  { name: 'Jun', earnings: 2390, projects: 3 },
];

const recentActivities = [
  { id: 1, text: 'Project "E-commerce Website" marked as completed', time: '10 minutes ago' },
  { id: 2, text: 'New project "Mobile App Design" assigned', time: '2 hours ago' },
  { id: 3, text: 'Payment received for Project X', time: '1 day ago' },
  { id: 4, text: 'Profile information updated', time: '2 days ago' },
];

const SummaryCard = ({ title, value, icon: Icon, color }) => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: 3, 
      borderRadius: 2,
      backgroundColor: 'background.paper',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      height: '100%',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      },
    }}
  >
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 600 }}>{value}</Typography>
      </Box>
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `${color}1A`,
          color: color,
        }}
      >
        <Icon fontSize="large" />
      </Box>
    </Box>
  </Paper>
);

const Dashboard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Dashboard Overview</Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard 
            title="Total Projects" 
            value="12" 
            icon={AssignmentIcon} 
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard 
            title="Total Earnings" 
            value="$8,540" 
            icon={MoneyIcon} 
            color="#4caf50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard 
            title="Completed Tasks" 
            value="24/30" 
            icon={CheckCircleIcon} 
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard 
            title="Active Projects" 
            value="5" 
            icon={TimelineIcon} 
            color="#ff9800"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              backgroundColor: 'background.paper',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Monthly Overview</Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="earnings" fill="#1976d2" name="Earnings ($)" />
                  <Bar dataKey="projects" fill="#4caf50" name="Projects" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              backgroundColor: 'background.paper',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Recent Activity</Typography>
            <Box>
              {recentActivities.map((activity) => (
                <Box key={activity.id} sx={{ mb: 2, pb: 2, borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <Typography variant="body2" sx={{ mb: 0.5 }}>{activity.text}</Typography>
                  <Typography variant="caption" color="text.secondary">{activity.time}</Typography>
                </Box>
              ))}
              <Typography 
                variant="body2" 
                color="primary" 
                sx={{ mt: 2, display: 'inline-block', cursor: 'pointer' }}
              >
                View all activities
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
