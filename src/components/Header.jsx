import React from 'react';
import {AppBar, Grid,Toolbar,Tab,Tabs,useTheme,useMediaQuery} from "@mui/material";
import Sidebar  from './Sidebar';
import {Link} from "react-scroll";


function Header(){

    //using media queries to make navbar responsive
    const toggleSmall = useMediaQuery(useTheme().breakpoints.down('sm'));
    const [state, setState] = React.useState();
    

    //if toggleSmall is true, only render the sidebar
    //else show the entire menu
return(
    <div id="home">
       <AppBar  position="fixed" sx={{background: "rgb(0,71,255)",
background: "linear-gradient(137deg, rgba(0,71,255,1) 0%, rgba(57,65,161,1) 49%, rgba(156,1,255,1) 100%)"}}>
           <Toolbar>
           {toggleSmall ? <Sidebar/>: 
           <Grid container>
           <Grid item xs={1} md={6} lg={6}></Grid>
           <Grid item xs={10} md={5} lg={5}>
   <Link style={{cursor:"pointer"}} to="home" smooth={true} duration={500} className="navbar-link">Home</Link>
  <a target="_blank" href="https://nilavro-resume.s3.ca-central-1.amazonaws.com/Fardin+Resume+.pdf" className="navbar-link" >Resume</a>
  <Link style={{cursor:"pointer"}} to="projects" className="navbar-link"  smooth={true} duration={500}>Projects</Link>
  <Link style={{cursor:"pointer"}} to="contact" smooth={true} duration={500} className="navbar-link">Contact</Link>
           </Grid>

           <Grid item xs={1} md={1} lg={1}></Grid>


           </Grid>
        }
           </Toolbar>
       </AppBar>
    </div>
);


}

export default Header;