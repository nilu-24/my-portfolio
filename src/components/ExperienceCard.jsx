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
    backgroundColor: "black"
}


export default function ExperienceCard(props) {
  return (
      <Card className="card-container" sx={{ maxWidth: 450}}>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <h2>
            {props.title} 
          </h2>
          <h3>{props.company}</h3>
          <h4>{props.date}</h4>
          
          {props.description.map((point)=>{
             return <p>{point}</p>
          })}
          
        </CardContent>

        <CardActions>
          <div>
          {props.stack.map((tech)=>{
              return <button style={techButtonStyle}>{tech}</button>
          })}   
          </div>
        </CardActions>
      </Card>
  );
}
