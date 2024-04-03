import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import { Box, Typography } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const About = () => {
  return (
    <>
      <Sidenav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph sx={{ml:30}}>About</Typography>
      </Box>
    </>
  );
};

export default About;
