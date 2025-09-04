import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TablePagination,
  Chip,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Divider
} from '@mui/material';
import {
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Add as AddIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon
} from '@mui/icons-material';

const statusColors = {
  'In Progress': 'primary',
  'Completed': 'success',
  'On Hold': 'warning',
  'Cancelled': 'error',
};

const projects = [
  {
    id: 1,
    name: 'E-commerce Website',
    client: 'Fashion Store',
    startDate: '2023-05-15',
    deadline: '2023-08-30',
    status: 'In Progress',
    priority: 'High',
    budget: 5000
  },
  {
    id: 2,
    name: 'Mobile App Development',
    client: 'Tech Solutions',
    startDate: '2023-06-01',
    deadline: '2023-09-15',
    status: 'In Progress',
    priority: 'Medium',
    budget: 7500
  },
  {
    id: 3,
    name: 'UI/UX Redesign',
    client: 'Creative Agency',
    startDate: '2023-04-10',
    deadline: '2023-07-20',
    status: 'On Hold',
    priority: 'High',
    budget: 3500
  },
  {
    id: 4,
    name: 'SEO Optimization',
    client: 'Digital Marketing Co.',
    startDate: '2023-07-01',
    deadline: '2023-08-15',
    status: 'In Progress',
    priority: 'Low',
    budget: 2000
  },
  {
    id: 5,
    name: 'Brand Identity Design',
    client: 'Startup X',
    startDate: '2023-03-15',
    deadline: '2023-05-30',
    status: 'Completed',
    priority: 'Medium',
    budget: 3000
  },
];

const Projects = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'deadline', direction: 'asc' });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setPage(0);
    handleMenuClose();
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredProjects = projects
    .filter(project => 
      (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.client.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === 'All' || project.status === statusFilter)
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredProjects.length) : 0;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Projects</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ textTransform: 'none' }}
        >
          New Project
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          placeholder="Search projects..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            sx: { 
              backgroundColor: 'background.paper',
              minWidth: 250,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            },
          }}
        />
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            onClick={handleMenuClick}
            sx={{ 
              textTransform: 'none',
              borderColor: 'divider',
              color: 'text.secondary',
              '&:hover': {
                borderColor: 'text.secondary',
              },
            }}
          >
            {statusFilter === 'All' ? 'Filter by Status' : statusFilter}
          </Button>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleStatusFilter('All')}>All</MenuItem>
            <Divider />
            {Object.keys(statusColors).map((status) => (
              <MenuItem key={status} onClick={() => handleStatusFilter(status)}>
                {status}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      <Paper 
        elevation={0}
        sx={{ 
          borderRadius: 2,
          border: '1px solid rgba(0, 0, 0, 0.12)',
          overflow: 'hidden',
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    Project Name
                    <IconButton size="small" onClick={() => handleSort('name')}>
                      <SortIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    Deadline
                    <IconButton size="small" onClick={() => handleSort('deadline')}>
                      <SortIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell align="right">Budget</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredProjects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : filteredProjects
              ).map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell sx={{ fontWeight: 500 }}>{project.name}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{new Date(project.startDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(project.deadline).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip 
                      label={project.status} 
                      size="small" 
                      color={statusColors[project.status] || 'default'}
                      sx={{ 
                        minWidth: 100,
                        fontWeight: 500,
                        backgroundColor: `${statusColors[project.status] || 'default'}1A`,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={project.priority} 
                      size="small" 
                      variant="outlined"
                      sx={{ 
                        minWidth: 80,
                        borderColor: project.priority === 'High' ? 'error.main' : 
                                    project.priority === 'Medium' ? 'warning.main' : 'success.main',
                        color: project.priority === 'High' ? 'error.main' : 
                               project.priority === 'Medium' ? 'warning.dark' : 'success.dark',
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>
                  <TableCell align="right">${project.budget.toLocaleString()}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProjects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}
        />
      </Paper>
    </Box>
  );
};

export default Projects;
