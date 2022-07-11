
import React from "react";
import {Grid} from "@mui/material";

import techArray from "./Tech";
import SkillBox from "./SkillBox";


export default function Skills(){

    return (
    
        <div className="skills">

       <center> <i class="fa-solid fa-gear code-icon"/></center>
        <h1  style={{textAlign:"center"}} className="section-title">Tools & Technology</h1>

        <h3 style={{fontFamily:"Montserrat",textAlign:"center"}}>These are some of my most favorite technologies I love working with:</h3>

<br></br>
<br/>
        <Grid container>
        {techArray.map((tech)=>{
            return <SkillBox name={tech.name} image={tech.image}/>
        })}
     </Grid>     
        </div>
    );
}



