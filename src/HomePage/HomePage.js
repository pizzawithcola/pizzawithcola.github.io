import { Box, Typography, Button } from "@mui/material";
import NavBar from "../Tools/NavBar";
import { useState, useEffect } from "react";

const HomePage = () => {
  return (
    <Box sx={{backgroundColor: "#ccc", height: "100vh"}}>
      <NavBar />
      <img />
      {/* <p style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "100px"}}>This is Home Page.</p> */}
    </Box>
   );
}
 
export default HomePage;