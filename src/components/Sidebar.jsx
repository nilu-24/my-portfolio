
import React, { useState } from "react";
import { Button,IconButton,List, ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CodeIcon from '@mui/icons-material/Code';
import { SwipeableDrawer } from '@mui/material';

import {Link} from "react-scroll";




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
                        <ListItemText><Link onClick={()=>{setOn(false)}}
                         to="home" smooth={true} duration={500} style={{textDecoration:"none",color:"black",fontFamily:"Montserrat",cursor:"pointer"}}>Home</Link></ListItemText>
                </ListItemButton>
                <ListItemButton>


                <ListItemIcon sx={{color:"#3a42a3"}}>  <ArticleIcon/> </ListItemIcon>
                        <ListItemText>
                            <a href="/" style={{textDecoration:"none",color:"black",fontFamily:"Montserrat"}}>Resume</a>
                            </ListItemText>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon sx={{color:"#3a42a3"}}><CodeIcon/></ListItemIcon>
                        <ListItemText><Link onClick={()=>{setOn(false)}}
                         to="projects" smooth={true} duration={500} style={{textDecoration:"none",color:"black",fontFamily:"Montserrat",cursor:"pointer"}}>Projects</Link></ListItemText>
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon sx={{color:"#3a42a3"}}><AlternateEmailIcon/></ListItemIcon>
                        <ListItemText><Link onClick={()=>{setOn(false)}}
                         to="contact" smooth={true} duration={500} style={{textDecoration:"none",color:"black",fontFamily:"Montserrat",cursor:"pointer"}}>Contact</Link></ListItemText>
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