import MediaCard from "./MediaCard";

import {Grid} from "@mui/material";



export default function Projects(){

    return (
        <div className="project-container">

        <i class="fa-solid fa-laptop-code code-icon"/>
        <h1 className="section-title">Projects</h1>   

        <Grid container>
            <Grid item xs={12} md={6} lg={6}>
            <MediaCard />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
            <MediaCard />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <MediaCard />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <MediaCard />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <MediaCard />
            </Grid>

        </Grid>
        

        </div>
    );



}