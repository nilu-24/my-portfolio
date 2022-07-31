import MediaCard from "./MediaCard";

import {Grid} from "@mui/material";

import ExperienceCard from "./ExperienceCard";
import corona from "./coronanet.png";
import portfolio from "./portfolio.jpeg";
import linalg from "./linalg.png";
import sort from "./sort.gif";
import leetdoc from "./leetdoc.png"



export default function Projects(){

    return (
        <div id="projects" className="project-container">
        <center><i class="fa-solid fa-laptop-code code-icon"/></center>
        <h1 style={{textAlign:"center"}} className="section-title">Projects</h1>  

        <h2 style={{fontFamily:"Montserrat",color:"#3a42a3",textAlign:"center"}}>Personal Projects</h2> 

        <h3 style={{fontFamily:"Montserrat",textAlign:"left"}}>I love creating fun web applications. I enjoy building and hosting ML models, algorithm visualizers and other Full-Stack applications. Here are some of the
        projects I've made:</h3>


        <Grid container align="center">


        <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="LeetDoc - Online IDE for Interviews"
             image={leetdoc} 
             description="LeetDoc is an online IDE to help you practice technical coding interview questions in a better way. Features include a Compiler, Timer, Drawing Pad, Notepad and much more."
             gitLink="https://github.com/nilu-24/LeetDoc"
             webLink="https://leetdoc.netlify.app/"
             stack = {["React.js","Node.js","Flask","bs4","REST APIs"]}
            />
            </Grid>


        <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="AlgoRhythms - Sorting Visualizer"
             image={sort} 
             description="AlgoRhythms is a fun sorting algorithm visualizer which sorts colorful arrays based on hue values. I built this web application to visualize the satisfying patterns and rhythms of these sorting algorithms on colorful arrays."
             gitLink="https://github.com/nilu-24/algorhythms"
             webLink="https://algorhythms.netlify.app/"
             stack = {["React.js","Async-Await","Sorting"]}
            />
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="Stitch.ai | Winner, CodeJam(XI) - Best UI/UX"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/853/096/datas/medium.gif" 
             description="Stitch.ai is a story-based community which helps connect people suffering from similar health conditions."
             gitLink="https://github.com/nilu-24/Stitch.ai"
             webLink="https://stitch-srsefll6ha-uc.a.run.app/"
             stack = {["Streamlit","Firebase","Docker","GCP","NLP","AWS Medical"]}
            />
            </Grid>

          
            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="CanvaStar - Constellation Classifier"
             image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/759/826/datas/gallery.jpg"
             description="CanvaStar is a Full Stack Deep Learning Flask application which can classify constellations in the sky using CNNs."
             gitLink="https://github.com/nilu-24/canvastar"
             webLink="http://canvastar-classifier.herokuapp.com/"
             stack = {["Python","Keras","Flask","Deep Learning","CNN"]}
            />
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="Linear Algebra Concept Blog"
             image={linalg} 
             description="I build this blog while working as a TA for MATH 133 - Linear Algebra & Geometry for students to revise crucial concepts and topics in linear algebra."
             gitLink="https://github.com/nilu-24/nilu-24.github.io"
             webLink="https://nilu-24.github.io/"
             stack = {["GitHub Pages","Jekyll","Markdown","Linear Algebra"]}
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

            <Grid item xs={12} md={6} lg={4}>
            <MediaCard title="Portfolio Website"
             image={portfolio} 
             description="A fully responsive Personal Portfolio Website created using React.js and Material UI."
             gitLink="https://github.com/nilu-24/my-portfolio"
             webLink="https://fardin24.netlify.app/"
             stack = {["React.js","Material UI","AWS S3"]}
            />
            </Grid>

        </Grid>
        
        <h2 style={{fontFamily:"Montserrat",color:"#3a42a3",textAlign:"center"}}>Experience <i class="fa-solid fa-briefcase"></i></h2>

        <h3 style={{fontFamily:"Montserrat",textAlign:"left"}}> My work experiences range from being a TA for my favorite
        Linear Algebra course to being a Software Engineering Intern at an eCommerce fashion company to doing AI Research and more...</h3>

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
            <ExperienceCard title="Software Engineering Intern"
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