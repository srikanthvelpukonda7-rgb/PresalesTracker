import { AppBar, Avatar, Grid, Toolbar, Typography } from "@mui/material";
import {  Office365UsersService } from "../generated";
import { useEffect } from "react";

const TopBar =  () => {//"a200a321-f0ae-40bf-a443-395f0642c46c"
  //"130427a5-92b9-4129-96e7-bb97ccd1b49b"



  useEffect(()=>{
     Office365UsersService.UserPhoto_V2("130427a5-92b9-4129-96e7-bb97ccd1b49b").then((res)=>{
      console.log(res);
     }) 
   

  },[])

 

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Grid container spacing={2} >
          <Typography variant="h4" sx={{ flexGrow: 1 ,verticalAlign:"center", alignSelf:"center" ,pl:"10px"}}>
            Customers
          </Typography>
          <Avatar sx={{ p: "10px" }}></Avatar>
        </Grid>
      </AppBar>
      <Toolbar />
      
    </>
  );
};

export default TopBar;
