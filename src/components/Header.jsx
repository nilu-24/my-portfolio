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
  <a target="_blank" href="https://fardin-24-resume.s3.ca-central-1.amazonaws.com/Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAOKpHzsD2vvJOsIQJglN%2BAGf%2Bc8eHH7UZuk1%2BsUNVCgeAiB1bUwWtDfOqx%2BIy0KfQ2YwZCPQxAvvvl%2BicHAF42RFGyrtAgi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDk4NDUwNjA3NzEyNSIMkCUiK61FYZG0LbTiKsECA5P5tMqDy2u7wLv%2F19zJJJoS97OP6hogAyIVTJam4ZUDML2UyUPFSfp%2BVyDBvH%2FvOGoAnGt6i5AroEnlBOQOHJwh0VmOCEMPVBEDVpXCI%2BGl2dUKxEO6byGYB7v4RaiOAD%2Bghj0b%2BtlH6BISv6VHf0hoJ3H261Y%2B4N3REgbLOgEqeRAsOfCzMaSXvfyLgaK%2Fv3gHtnmJ8mfbY11Omvygte71Gp1LQQHqIgdCQmZErKKmYHwguRAanjDUfNe1j3sTnqb%2B%2FYP%2Bm4U041VpwcIPHUTbjNnEG63XeBvbt2XYmb%2F3ye%2BquFG%2BtVuqw77CBiE3CaKYdBpYdpfXbpv%2FJAiU2xRD5ol9B4ewIxYNsG%2FDa8hrH63%2FlndnG1BUbICpx1IVtU0aj%2FdI4MLOBKl3pRRUUb%2Bp6%2FkLJzaEOvpD%2F0%2BrC75EMLyplZYGOrMCMC1KbDlDkWnMs45KTLjOKLn%2FKMFP7HNOIWpOZrfDKxotA%2F4t9uB4Hd0t9j%2BJmshB16jcDvmA8bgPiU2eJXj4FRLr0QG6ogHxinqlNbO3zD5iEdA%2B4KMKeDzSKXNDnjt%2Fa1K3f90btDNvkrMqbCKV8UJidXlb42WfjQ0d%2FLmxszygi4DBWRnYETR5mEZ171wCH%2FS7Ua2qhlhf7ifEs1mznQ0O3IrgtvS3I%2FR9c4ueSWLuDIFrBQqCOJOXlPy9VYmjTReiDkrDFwHpoXSEEwft8UPh23jaPUp6QRhaIDZhH8f%2F4DJwTdGdnEsabTsa5OL7JQaIcPjPqDkd7WmsxVxZkP12U%2BR17fsL3uf%2BqXHDHO8%2Fz%2BnhNIIqwsD%2FLTim2ahkrkVDG2KO54NtCVkBAjpFGm5DKw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220706T093045Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6KOJCR7CWOSCRJHO%2F20220706%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Signature=78f535df5f5e0c1d7c0584fadf3773ece0f8f5dbdf4cea087f7e35c89620c5e3" className="navbar-link" >Resume</a>
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