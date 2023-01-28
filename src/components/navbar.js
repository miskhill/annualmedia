// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// // import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import AdbIcon from '@mui/icons-material/Adb';
// // import { userIsAuthenticated } from "./utils/helper.js";
// import axios from "axios";
// import { getTokenFromLocalStorage } from "./utils/helper.js";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const pages = ['Movies', 'Series', 'Books'];
//   const settings = ['Login', 'Logout'];

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
    
//     // handle different routes on different pages click
//     // if (pages.page === 'Movies') {
//     //   navigate('/movies');
//     // }
//     // if (pages.page === 'Series') {
//     //   <Link to="/series" id="navLink">Series</Link>
//     // }
//     // if (pages.page === 'Books') {
//     //   navigate('/books');
//     // }


//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   useEffect(() => {}, [location.pathname]);

//   const handleLogout = () => {
//     window.localStorage.removeItem("token");
//     navigate.push("/");
//   };

//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get("/api/user", {
//           headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
//         });
//         setUser(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);

//   const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto",
//     },
//   }));

//   const SearchIconWrapper = styled("div")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   }));

//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create("width"),
//       width: "100%",
//       [theme.breakpoints.up("sm")]: {
//         width: "12ch",
//         "&:focus": {
//           width: "20ch",
//         },
//       },
//     },
//   }));
//   // if user is logged in, should display logout button/code instead of login/register
//   // background image and styling





//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 href={'/series'}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="M" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
  
// export default NavBar;
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position='static'>
    //     <Toolbar>
    //       <IconButton
    //         size='small'
    //         edge='start'
    //         color='inherit'
    //         aria-label='menu'
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //         <Link to='/movies' id='navLink'>
    //           Movie
    //         </Link>
    //         <Link to='/books' id='navLink'>
    //           Books
    //         </Link>
    //         <Link to='/series' id='navLink'>
    //           Series
    //         </Link>
    //         <Link to='/'>Upload</Link>
    //       </IconButton>
    //       <Typography
    //         variant='h6'
    //         component='div'
    //         sx={{ flexGrow: 1 }}
    //       ></Typography>
    //       <Search>
    //         <SearchIconWrapper>
    //           <SearchIcon />
    //         </SearchIconWrapper>
    //         <StyledInputBase
    //           placeholder='Search…'
    //           inputProps={{ "aria-label": "search" }}
    //         />
    //       </Search>
    //       {/* <Button color='inherit'>Login</Button> */}
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    // <div id='navbar'>
    //   <div id="navwrap">
    //     <Link to="/" id="navLink">Home</Link>
    //     <Link to="/movies" id="navLink">Movie</Link>
    //     <Link to="/books" id="navLink">Books</Link>
    //     <Link to="/series" id="navLink">Series</Link>
    //     {
    //       user.username === 'admin' ?
    //         <Link to="/AdminUpload" id="navLink">Admin Upload</Link>
    //         :
    //         <>
    //         </>
    //     }
    //     {
    //       userIsAuthenticated() ?
    //         <span id="navLinkLogout" onClick={handleLogout}>Logout</span>
    //         :
    //         <>
    //           <Link to="/signIn" id="navLink">Sign In</Link>
    //           <Link to="/signUp" id="navLink">Sign Up</Link>
    //         </>
    //     }
    //   </div>
    // </div>


    import React from "react";
    import {
      AppBar,
      Toolbar,
      CssBaseline,
      Typography,
      makeStyles,
      useTheme,
      useMediaQuery,
    } from "@material-ui/core";
    import { Link } from "react-router-dom";
    import DrawerComponent from "./drawer";
    
    const useStyles = makeStyles((theme) => ({
      navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
      },
      logo: {
        flexGrow: "1",
        cursor: "pointer",
      },
      link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        },
      },
    }));
    
    function Navbar() {
      const classes = useStyles();
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
      return (
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Annual Media
              
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className={classes.navlinks}>
                <Link to="/" className={classes.link}>
                  Upload
                </Link>
                <Link to="/movies" className={classes.link}>
                  Movies
                </Link>
                <Link to="/series" className={classes.link}>
                  Series
                </Link>
                <Link to="/books" className={classes.link}>
                  Books
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      );
    }

    export default Navbar;