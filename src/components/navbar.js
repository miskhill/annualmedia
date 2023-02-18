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