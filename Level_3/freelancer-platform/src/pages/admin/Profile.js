import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Avatar, 
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Switch
} from '@mui/material';
import { 
  Person as PersonIcon, 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon,
  Visibility,
  VisibilityOff,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    jobTitle: 'Senior Developer',
    bio: 'Experienced developer with over 5 years of experience in web development and UI/UX design. Passionate about creating beautiful and functional applications.',
    notifications: true,
    emailNotifications: true,
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setEditMode(false);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change submission here
    setPassword({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Profile Settings</Typography>
        {!editMode ? (
          <Button 
            variant="contained" 
            startIcon={<EditIcon />}
            onClick={() => setEditMode(true)}
            sx={{ textTransform: 'none' }}
          >
            Edit Profile
          </Button>
        ) : (
          <Box>
            <Button 
              variant="outlined" 
              startIcon={<CancelIcon />}
              onClick={() => setEditMode(false)}
              sx={{ mr: 1, textTransform: 'none' }}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
              sx={{ textTransform: 'none' }}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Box sx={{ position: 'relative', mb: 2 }}>
              <Avatar 
                sx={{ 
                  width: 120, 
                  height: 120, 
                  fontSize: 48,
                  bgcolor: 'primary.main',
                  mb: 2
                }}
              >
                {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
              </Avatar>
              {editMode && (
                <IconButton 
                  color="primary" 
                  aria-label="upload picture" 
                  component="label"
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  <input hidden accept="image/*" type="file" />
                  <EditIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
            
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {profile.firstName} {profile.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {profile.jobTitle}
            </Typography>
            
            <Box sx={{ width: '100%', mt: 2, textAlign: 'left' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <EmailIcon color="action" sx={{ mr: 1.5, color: 'text.secondary' }} />
                <Typography variant="body2">{profile.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                <PhoneIcon color="action" sx={{ mr: 1.5, color: 'text.secondary' }} />
                <Typography variant="body2">{profile.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationIcon color="action" sx={{ mr: 1.5, color: 'text.secondary' }} />
                <Typography variant="body2">{profile.location}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0}
            component="form"
            onSubmit={handleSubmit}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              mb: 3
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Personal Information</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  disabled={!editMode}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!editMode}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  disabled={!editMode}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="jobTitle"
                  value={profile.jobTitle}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  disabled={!editMode}
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper 
            elevation={0}
            component="form"
            onSubmit={handlePasswordSubmit}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              mb: 3
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Change Password</Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Password"
                  name="currentPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={password.currentPassword}
                  onChange={handlePasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="New Password"
                  name="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={password.newPassword}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={password.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  type="submit" 
                  variant="contained"
                  disabled={!password.currentPassword || !password.newPassword || password.newPassword !== password.confirmPassword}
                  sx={{ textTransform: 'none' }}
                >
                  Update Password
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              borderRadius: 2,
              border: '1px solid rgba(0, 0, 0, 0.12)'
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Notification Preferences</Typography>
            
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={profile.notifications}
                    onChange={handleChange}
                    name="notifications"
                    color="primary"
                  />
                }
                label="Enable Notifications"
                sx={{ display: 'block', mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={profile.emailNotifications}
                    onChange={handleChange}
                    name="emailNotifications"
                    color="primary"
                    disabled={!profile.notifications}
                  />
                }
                label="Email Notifications"
                sx={{ display: 'block' }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
