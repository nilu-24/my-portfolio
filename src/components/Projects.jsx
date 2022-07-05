import MediaCard from "./MediaCard";

import {Grid} from "@mui/material";



export default function Projects(){

    return (
        <div id="projects" className="project-container">

        <i class="fa-solid fa-laptop-code code-icon"/>
        <h1 className="section-title">Projects</h1>   

        <h3 style={{fontFamily:"Montserrat"}}>I love creating web applications and incorporating AI into them. Here are some of the
        projects I've made:</h3>

        <Grid container>
            <Grid item xs={12} md={6} lg={6}>
            <MediaCard title="Stitch.ai | Winner, CodeJam(XI) - Best UI/UX"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/853/096/datas/medium.gif" 
             description="Stitch.ai is a story-based community which helps connect people suffering from similar health conditions.
          AWS Medical API is used to extract medical entities from stories and are stored in the Firebase database. We implemented
          our own match-making algorithm using hash maps."
             gitLink="https://github.com/nilu-24/Stitch.ai"
             webLink="https://devpost.com/software/stitch-ai"
             stack = {["Python","Firebase","AWS","Streamlit","NLP"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
            <MediaCard title="CanvaStar - Constellation Classifier"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/759/826/datas/gallery.jpg" 
             description="CanvaStar is a Full Stack Deep Learning Flask application which can classify 14 different constellations in the sky using CNNs. The user can 
             draw a constellation in an HTML Canvas and the model classifies it. Fun Fact: We used our own drawings to train the model! "
             gitLink="https://github.com/nilu-24/canvastar"
             webLink="http://canvastar-classifier.herokuapp.com/"
             stack = {["Python","Keras","Flask","Deep Learning","CNN"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
            <MediaCard title="What2Wear?"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/803/168/datas/original.gif" 
             description="What2Wear? is a simple fully responsive website which recommends clothing using a heuristic algorithm based on
             the weather conditions in any location.  "
             gitLink="https://github.com/nilu-24/What2Wear"
             webLink="https://what2-wear.herokuapp.com/"
             stack = {["HTML","CSS","Bootstrap","JavaScript","OpenWeather API"]}
            />
            </Grid>

        </Grid>
        

        </div>
    );



}