import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const navButtonStyles = {
    color: 'black',
    textTransform: 'none',
    mx: 2,
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    }
  };

  return ( 
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent:"start" }}>
      <div>
        <img src="/gpt_sign.png" style={{ position: 'absolute', top: '-10px', bottom: '-20px', width: '70px', marginLeft: "16px", marginTop: "8px"}} alt="/logo512.png" />
      </div>
      <AppBar 
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          backgroundImage: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }} >
          <Button color="inherit" sx={navButtonStyles} onClick={() => navigate('/')} >Home</Button>
          <Button color="inherit" sx={navButtonStyles} onClick={() => navigate('/education')}>Education</Button>
          <Button color="inherit" sx={navButtonStyles}>Experience</Button> 
          <Button color="inherit" sx={navButtonStyles}>Travel</Button> 
          <Button color="inherit" sx={navButtonStyles}>Blogs</Button> 
        </Toolbar>
      </AppBar>
    </Box>
   );
}
 
export default NavBar;