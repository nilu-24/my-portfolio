import MediaCard from "./MediaCard";

import {Grid} from "@mui/material";

import ExperienceCard from "./ExperienceCard";
import corona from "./coronanet.png";



export default function Projects(){

    return (
        <div id="projects" className="project-container">
        <center><i class="fa-solid fa-laptop-code code-icon"/></center>
        <h1 style={{textAlign:"center"}} className="section-title">Projects</h1>  

        <h2 style={{fontFamily:"Montserrat",color:"#3a42a3",textAlign:"center"}}>Personal Projects</h2> 

        <h3 style={{fontFamily:"Montserrat",textAlign:"center"}}>I love creating web applications and incorporating AI into them. Here are some of the
        projects I've made:</h3>


        <Grid container align="center">
            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="Stitch.ai | Winner, CodeJam(XI) - Best UI/UX"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/853/096/datas/medium.gif" 
             description="Stitch.ai is a story-based community which helps connect people suffering from similar health conditions."
             gitLink="https://github.com/nilu-24/Stitch.ai"
             webLink="https://devpost.com/software/stitch-ai"
             stack = {["Python","Firebase","AWS","Streamlit","NLP"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="Portfolio Website"
             image="https://media-exp2.licdn.com/dms/image/C562DAQFo6t-5fgcDIw/profile-treasury-image-shrink_800_800/0/1657114319625?e=1657810800&v=beta&t=KjpWp6rLbJlFvOmY33VviXBJpeqOB_Ss0d61U2Nh0GE" 
             description="A fully responsive Personal Portfolio Website created using React.js and Material UI."
             gitLink="https://github.com/nilu-24/my-portfolio"
             webLink="https://fardin24.netlify.app/"
             stack = {["React.js","Material UI","AWS S3"]}
            />
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="CanvaStar - Constellation Classifier"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/759/826/datas/gallery.jpg" 
             description="CanvaStar is a Full Stack Deep Learning Flask application which can classify 14 different constellations in the sky using CNNs. Fun Fact: We used our own drawings to train the model! "
             gitLink="https://github.com/nilu-24/canvastar"
             webLink="http://canvastar-classifier.herokuapp.com/"
             stack = {["Python","Keras","Flask","Deep Learning","CNN"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
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
        
        <h2 style={{fontFamily:"Montserrat",color:"#3a42a3",textAlign:"center"}}>Experience <i class="fa-solid fa-briefcase"></i></h2>

        <h3 style={{fontFamily:"Montserrat",textAlign:"center"}}> My work experiences range from being a TA for my favorite
        Linear Algebra course to being a Software Engineer Intern at an eCommerce fashion company to doing AI Research and more...</h3>

        <Grid container align="center" >
        <Grid item xs={12} md={6} lg={4}>
            <ExperienceCard title="Data Science Intern"
            company="CoronaNet Research Project"
             image={corona}
             date = "Jun 2021 - Aug 2021"
             description={["Member of the Data Science Team, performing Exploratory Data Analysis (EDA) on COVID-19 data, building Tableau Dashboards and modelling cases per week in Bulgaria using Time Series Analysis in R. "]}
             stack = {["Python","R","Data Science"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <ExperienceCard title="Software Engineer Intern"
            company="Bangladesh Brands"
             image="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.18169-9/13435518_10154214695549544_181622768281678379_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeFIxDbNBFug8RHIrSYdRsn3fW528GtRU1x9bnbwa1FTXKEd1s1657iRTw7frykrdC8qKIlVDWms-c-QjNdjhIfd&_nc_ohc=TdK6J--AQi8AX8zSNbn&_nc_ht=scontent.fdac99-1.fna&oh=00_AT_VI3QyzRGWuEraltaMYZLizJvLhHjN_B0qGRI_gIA1Og&oe=62EACA9A"
             date = "Jul 2019 - Sept 2019"
             description = {["Co-developed the landing page of the eCommerce fashion website in a team of 5 developers."]}
             stack = {["HTML","CSS","JavaScript","SQL","SCRUM"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <ExperienceCard title="Undergraduate Teaching Assistant, Linear Algebra"
            company="McGill University"
             image="https://miro.medium.com/max/3080/0*BR949eNWL2i-Sj4R"
             date = "Aug 2021 - Jan 2022"
             description = {["Awarded the Tomlinson Engagement Award for Mentorship for MATH 133 - Linear Algebra & Geometry."]}
             stack={["Teaching","Maths","Linear Algebra"]}
            />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <ExperienceCard title="AI Research Developer"
            company="McGill University"
             image="https://cdn.vox-cdn.com/thumbor/tIM_nLhri2W7Qz9Q_pedB9Fwtsg=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/63572667/acastro_190416_1777_music_ai_0001.0.0.jpg"
             date = "May 2022 - Aug 2022"
             description = {["Music generation from images and text using natural language processing (NLP) and deep neural network architectures."]}
             stack={["AI Research","Python","Music","Deep Learning"]}
            />
            </Grid>

        </Grid>

        

        </div>
    );


}