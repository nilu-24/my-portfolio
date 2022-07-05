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


export default function MediaCard(props) {
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
          <p> {props.description}</p>
        
        </CardContent>
        <CardActions>
          <div>
            <button style={linkButtonStyle}> <a target="_blank" style={{textDecoration:"none", color:"black"}} href={props.gitLink}> GitHub <i class="fa-brands fa-github-alt"></i> </a></button>
            <button style={linkButtonStyle}> <a target="_blank" style={{textDecoration:"none", color:"black"}} href={props.webLink} >Website <i class="fa-solid fa-globe"></i></a></button>
          </div>
        </CardActions>

        <CardActions>
          <div>

          {props.stack.map((tech)=>{
              return <button style={techButtonStyle}>{tech} </button>
          })}   
          </div>
        </CardActions>
      </Card>
  );
}
