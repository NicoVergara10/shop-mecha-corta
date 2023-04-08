import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, Box, Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { colors } from "./utils/colors";
import Navbar from "./components/Navbar";

const useStyles = makeStyles()((theme: Theme) => ({
  app: {
    display: "flex",
    height: "100vh",
    backgroundColor: colors.white,
  },
  pageContainer: {
    flexGrow: 1,
    marginTop: "64px",
    "@media (max-width: 600px)": {
      marginTop: "56px",
    },
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "120%",
    width: "100%",
  },
}));

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    </div>
  );
}

export default App;
