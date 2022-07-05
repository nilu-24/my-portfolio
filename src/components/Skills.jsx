
import React from "react";
import {Grid} from "@mui/material";

import techArray from "./Tech";
import SkillBox from "./SkillBox";


export default function Skills(){

    return (
    
        <div className="skills">

        <i class="fa-solid fa-gear code-icon"/>
        <h1 className="section-title">Tools & Technology</h1>

        <h3 style={{fontFamily:"Montserrat"}}>These are some of my most favorite technologies I love working with:</h3>

        <Grid container>
        {techArray.map((tech)=>{
            return <SkillBox name={tech.name} image={tech.image}/>
        })}
     </Grid>     
        </div>
    );
}



