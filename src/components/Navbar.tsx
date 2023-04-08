import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Theme,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { colors } from "../utils/colors";

const useStyles = makeStyles()((theme: Theme) => ({
  menuItemStyle: {
    textTransform: "lowercase",
  },
  toolbarStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonItemStyle: {
    textAlign: "left",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "17px",
    my: 2,
    color: "white",
    display: "block",
    marginLeft: "20px",
    marginRight: "10px",
    padding: "0px 0px 0px 0px",
    ":hover": {
      background: "none",
      backgroundColor: "none",
      borderBottom: "3px solid #ea5354",
      borderRadius: "0px",
      transition: ".3s ease-out",
    },
  },
}));

const pages = [
  "Inicio",
  "Sobre Mecha Corta CX",
  "Nuestros servicios",
  "Preguntas frecuentes",
  "Contacto",
];

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: colors.greyLight,
        height: "65px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbarStyle}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ea5354",
              textDecoration: "none",
            }}
          >
            MECHA CORTA
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Button key={page} className={classes.buttonItemStyle}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
