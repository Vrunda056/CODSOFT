

import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Avatar, Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { blue } from '@mui/material/colors';
import { useNavigate, useLocation } from 'react-router-dom';

const expandedWidth = 240;
const collapsedWidth = 72;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'My Applications', icon: <WorkIcon />, path: '/applications' },
  { text: 'Browse Jobs', icon: <ManageSearchIcon />, path: '/joblistings' },
];

const FixedLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
  
    checkLogin(); // <- run on mount
    window.addEventListener("storage", checkLogin);
  
    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, [location.pathname]);
  

  const drawerWidth = collapsed ? collapsedWidth : expandedWidth;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
              sx={{
                justifyContent: collapsed ? 'center' : 'flex-start',
                px: 2.5,
                borderRadius: 2,
                m: 1
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 'auto' : 3, justifyContent: 'center' }}>
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: '#fff',
          color: blue[700],
          boxShadow: 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit" edge="start" onClick={() => setCollapsed(!collapsed)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold" color={blue[700]}>
              {navItems.find((item) => item.path === location.pathname)?.text || 'JobPortal'}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" flexGrow={1} justifyContent="center">
            <Box
              display="flex"
              alignItems="center"
              sx={{
                width: '50%',
                padding: '8px 16px',
                border: '1px solid #ccc',
                borderRadius: '20px',
                outline: 'none',
                fontSize: '16px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Box
                component="input"
                placeholder="Search..."
                sx={{
                  flexGrow: 1,
                  border: 'none',
                  outline: 'none',
                  paddingLeft: '8px',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                }}
              />
              <IconButton
                sx={{
                  bgcolor: blue[700],
                  color: '#fff',
                  borderRadius: '20px',
                  ml: 1,
                  padding: '4px 12px', // Adjusted padding to make the button smaller
                  fontSize: '14px', // Adjusted font size for smaller appearance
                  '&:hover': { bgcolor: blue[800] },
                }}
              >
                <ManageSearchIcon />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton color="inherit">
              <NightsStayIcon />
            </IconButton>
            {isLoggedIn ? (

  <>
    <Tooltip title="My Profile">
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => navigate('/profile')}
      >
        <Avatar src="/user.png" />
      </IconButton>
    </Tooltip>
    <Typography
      variant="body1"
      sx={{ cursor: 'pointer', ml: 2 }}
      onClick={() => {
        localStorage.removeItem("token"); // make sure the key matches
        setIsLoggedIn(false); // update global login state
        navigate('/login');
        window.location.reload(); // optional
      }}
      
    >
      Logout
    </Typography>
  </>
) : (
  <>
    <Typography
      variant="body1"
      sx={{ cursor: 'pointer', mr: 2 }}
      onClick={() => navigate('/login')}
    >
      Login
    </Typography>
    <Typography
      variant="body1"
      sx={{ cursor: 'pointer', mr: 2 }}
      onClick={() => navigate('/register')}
    >
      Sign Up
    </Typography>
  </>
)}



          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '0px',
            height: 'calc(100% - 64px)',
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: collapsed ? `${collapsedWidth}px` : '30px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FixedLayout;


// import React, { useState } from 'react';
// import {
//   AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem,
//   ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Avatar, Tooltip,
//   Menu, MenuItem
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import WorkIcon from '@mui/icons-material/Work';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import NightsStayIcon from '@mui/icons-material/NightsStay';
// import { blue } from '@mui/material/colors';
// import { useNavigate, useLocation } from 'react-router-dom';

// const expandedWidth = 240;
// const collapsedWidth = 72;

// const navItems = [
//   { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//   { text: 'My Applications', icon: <WorkIcon />, path: '/applications' },
//   { text: 'Saved Jobs', icon: <BookmarkIcon />, path: '/save-job' },
//   { text: 'Browse Jobs', icon: <ManageSearchIcon />, path: '/joblistings' },
// ];

// const FixedLayout = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const drawerWidth = collapsed ? collapsedWidth : expandedWidth;

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     handleMenuClose();
//     navigate('/login');
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton
//               selected={location.pathname === item.path}
//               onClick={() => navigate(item.path)}
//               sx={{
//                 justifyContent: collapsed ? 'center' : 'flex-start',
//                 px: 2.5,
//                 borderRadius: 2,
//                 m: 1
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 'auto' : 3, justifyContent: 'center' }}>
//                 {item.icon}
//               </ListItemIcon>
//               {!collapsed && <ListItemText primary={item.text} />}
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           bgcolor: '#fff',
//           color: blue[700],
//           boxShadow: 1
//         }}
//       >
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Box display="flex" alignItems="center">
//             <IconButton color="inherit" edge="start" onClick={() => setCollapsed(!collapsed)} sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" fontWeight="bold" color={blue[700]}>
//               {navItems.find((item) => item.path === location.pathname)?.text || 'JobPortal'}
//             </Typography>
//           </Box>

//           <Box display="flex" alignItems="center" flexGrow={1} justifyContent="center">
//             <Box
//               display="flex"
//               alignItems="center"
//               sx={{
//                 width: '50%',
//                 padding: '8px 16px',
//                 border: '1px solid #ccc',
//                 borderRadius: '20px',
//                 outline: 'none',
//                 fontSize: '16px',
//                 backgroundColor: '#f9f9f9',
//               }}
//             >
//               <Box
//                 component="input"
//                 placeholder="Search..."
//                 sx={{
//                   flexGrow: 1,
//                   border: 'none',
//                   outline: 'none',
//                   paddingLeft: '8px',
//                   fontSize: '16px',
//                   backgroundColor: 'transparent',
//                 }}
//               />
//               <IconButton
//                 sx={{
//                   bgcolor: blue[700],
//                   color: '#fff',
//                   borderRadius: '20px',
//                   ml: 1,
//                   padding: '4px 12px',
//                   fontSize: '14px',
//                   '&:hover': { bgcolor: blue[800] },
//                 }}
//               >
//                 <ManageSearchIcon />
//               </IconButton>
//             </Box>
//           </Box>

//           <Box display="flex" alignItems="center">
//             <IconButton color="inherit">
//               <NightsStayIcon />
//             </IconButton>

//             {localStorage.getItem('token') ? (
//               <>
//                 <Tooltip title="Account">
//                   <IconButton onClick={handleMenuClick} sx={{ ml: 1 }}>
//                     <Avatar src="AccountCircleIcon" />
//                   </IconButton>
//                 </Tooltip>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleMenuClose}
//                   PaperProps={{
//                     elevation: 3,
//                     sx: {
//                       mt: 1.5,
//                       borderRadius: 2,
//                       minWidth: 150,
//                     },
//                   }}
//                 >
//                   <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
//                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                 </Menu>
//               </>
//             ) : (
//               <>
//                 <Typography
//                   variant="body1"
//                   sx={{ cursor: 'pointer', mr: 2 }}
//                   onClick={() => navigate('/api/auth/login')}
//                 >
//                   Login
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ cursor: 'pointer', mr: 2 }}
//                   onClick={() => navigate('/api/auth/register')}
//                 >
//                   Sign Up
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             top: '0px',
//             height: 'calc(100% - 64px)',
//           },
//         }}
//         open
//       >
//         {drawer}
//       </Drawer>

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           mt: 8,
//           ml: collapsed ? `${collapsedWidth}px` : '30px',
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default FixedLayout;
// // components/layouts/FixedLayout.js