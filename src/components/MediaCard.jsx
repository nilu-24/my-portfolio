import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


const techButtonStyle = {
    fontFamily: "Montserrat",
    margin: "5px",
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    color: "white",
    backgroundColor: "#3a42a3"
}


const linkButtonStyle ={
    fontFamily: "Montserrat",
    margin: "5px",
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer"
}

const stack = ["Python", "Firebase", "AWS", "Streamlit", "NLP"]


export default function MediaCard() {
  return (
      <Card className="card-container" sx={{ maxWidth: 450}}>
        <CardMedia
          component="img"
          height="200"
          image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/853/096/datas/medium.gif"
          alt="stitch.ai"
        />
        <CardContent>
          <h1>
            Stitch.ai 
          </h1>
          
          <p> Stitch.ai is a story-based community which helps connect people suffering from similar health conditions.
          AWS Medical API is used to extract medical entities from stories and are stored in the Firebase database. We implemented
          our own match-making algorithm using hash maps.
          </p>
         
        </CardContent>
        <CardActions>
          <div>
            <button style={linkButtonStyle}> <a style={{textDecoration:"none", color:"black"}} href="https://www.google.com/"> GitHub <i class="fa-brands fa-github-alt"></i> </a></button>
            <button style={linkButtonStyle}> <a style={{textDecoration:"none", color:"black"}} href="https://www.google.com/" >Website <i class="fa-solid fa-globe"></i></a></button>
          </div>
        </CardActions>

        <CardActions>
          <div>

          {stack.map((tech)=>{
              return <button style={techButtonStyle}>{tech} </button>
          })}   
          </div>
        </CardActions>
      </Card>
  );
}
