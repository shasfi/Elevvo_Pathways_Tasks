import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Box textAlign="center" py={8}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            Welcome to Freelance Platform
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            paragraph
            sx={{ maxWidth: '700px', mx: 'auto', mb: 4 }}
          >
            A comprehensive platform for managing your freelance projects, clients, and tasks efficiently.
          </Typography>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Button
              component={RouterLink}
              to="/admin/dashboard"
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Go to Dashboard
            </Button>
            <Button
              component="a"
              href="#features"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
        
        <Box id="features" sx={{ py: 8, mt: 8, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 600 }}>
            Features
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {[
              {
                title: 'Project Management',
                description: 'Easily manage all your projects in one place with our intuitive dashboard.'
              },
              {
                title: 'Task Tracking',
                description: 'Keep track of tasks, deadlines, and progress with our comprehensive task manager.'
              },
              {
                title: 'Client Communication',
                description: 'Streamline communication with clients through our built-in messaging system.'
              },
              {
                title: 'Time Tracking',
                description: 'Track time spent on projects and generate detailed reports for clients.'
              },
              {
                title: 'Invoicing',
                description: 'Create and send professional invoices directly from the platform.'
              },
              {
                title: 'Analytics',
                description: 'Gain insights into your freelance business with detailed analytics and reports.'
              }
            ].map((feature, index) => (
              <Box 
                key={index} 
                sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  maxWidth: 300,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
