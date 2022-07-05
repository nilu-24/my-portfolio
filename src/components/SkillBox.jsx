//import statements
import React from "react";
import {Grid} from "@mui/material";

export default function SkillBox(props){

    return (
        <Grid item xs={6} md={3} lg={2}> 
        <div className="skill-box">
        <img className="logo" src={props.image}></img>
        <p className="skill-text">{props.name}</p>
        </div>
        </Grid>
    );
}
