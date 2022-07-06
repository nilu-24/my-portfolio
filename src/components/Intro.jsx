//includes intro message
//some animations
//social media buttons

import Typical from "react-typical";
import {Button, Grid} from "@mui/material";
import React from "react";
export default function Intro(){

    return (
        <div id="home" className="intro">

        <h1 className="title">Hi, I'm <span> Fardin</span>.</h1>
        <h3 className="tag">
            An aspiring entrepreneur with a searing passion for technology.
        </h3>
        
             <h2 class="aspiring" >I build {" "}
           <Typical className="col" loop={Infinity} wrapper="b" steps={[
                 "Software.",1000,
                 "Machine Learning Models.",
                 1000,
                 "Web Applications.",1000,
                 "the Future.",1000
             ]}>
             </Typical> 
             </h2>
                <Grid container>

                <Grid item xs={12} md={12} lg={12}>
                <Button target="_blank"  href="https://github.com/nilu-24"  size = "large" style={{backgroundColor:"#333", margin:"10px"}} variant="contained"><i style={{fontSize:"24px"}} class="fa-brands fa-github"></i></Button>

                <Button  target="_blank"  href="https://www.linkedin.com/in/fardin-abdullah-0448561b1/" size = "large" style={{backgroundColor:"#0072b1",margin:"10px"}}  variant="contained"><i style={{fontSize:"24px"}} class="fa-brands fa-linkedin"></i></Button>

                <Button target="_blank"  size = "large" style={{backgroundColor:"#54BAB9",margin:"10px"}}  variant="contained" href="mailto:fardin.abdullah@mail.mcgill.ca"><i style={{fontSize:"24px"}} class="fa-solid fa-at"></i></Button>

                <a className="al-link" target="_blank" href="https://nilavro-resume.s3.ca-central-1.amazonaws.com/Fardin+Resume+.pdf"><button className="button">Resume</button></a>
                </Grid>
                </Grid>


        </div>
    );
}