
import React, { useState } from "react";
import { Button,IconButton,List, ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CodeIcon from '@mui/icons-material/Code';
import { SwipeableDrawer } from '@mui/material';


export default function Sidebar(){

    const[on, setOn] = React.useState(false);
    return(
        <div>
            <SwipeableDrawer PaperProps={{
                 sx: { width: "60%" },}} anchor="right" open={on} onClose={()=>{
                setOn(false);
            }}>
            <List>

            <ListItemButton>
                <ListItemText><p className="nav-menu">Navigation Menu</p></ListItemText>
            </ListItemButton>

                <ListItemButton>
                <ListItemIcon sx={{color:"#3a42a3"}}><HomeIcon/></ListItemIcon>
                        <ListItemText><a href="#home" style={{textDecoration:"none",color:"black",fontFamily:"Montserrat"}}>Home</a></ListItemText>
                </ListItemButton>
                <ListItemButton>


                <ListItemIcon sx={{color:"#3a42a3"}}>  <ArticleIcon/> </ListItemIcon>
                        <ListItemText>
                            <a href="/" style={{textDecoration:"none",color:"black",fontFamily:"Montserrat"}}>Resume</a>
                            </ListItemText>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon sx={{color:"#3a42a3"}}><CodeIcon/></ListItemIcon>
                        <ListItemText><a href="/" style={{textDecoration:"none",color:"black",fontFamily:"Montserrat"}}>Projects</a></ListItemText>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon sx={{color:"#3a42a3"}}><AlternateEmailIcon/></ListItemIcon>
                        <ListItemText><a href="/" style={{textDecoration:"none",color:"black",fontFamily:"Montserrat"}}>Contact</a></ListItemText>
                </ListItemButton>

            </List>
            </SwipeableDrawer>

            <IconButton onClick={()=>{
                setOn(true);
            }}>
                <MenuIcon sx={{color:"white"}}></MenuIcon>
            </IconButton>
        </div>
    );


}