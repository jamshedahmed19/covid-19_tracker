import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import Appbar from "@material-ui/core/AppBar";
import covid from "../images/coronavirus.png";
import { GlobalContext } from "../Context/GlobalContext";

function Header() {
  const { globalData } = useContext(GlobalContext);
  return (
    <Appbar color="primary" position="static">
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant="h3" display="inline" color="secondary">
            Track
          </Typography>
          <Typography variant="h4" display="inline" color="secondary">
            C<img style={{ width: "45px" }} alt='covid icon' src={covid}></img>vid
          </Typography>
        <Typography
          align="right"
          variant="h6"
          display="inline"
          color="secondary"
        >
          Last Updated:
          {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(globalData.updated)}
        </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Appbar>
  );
}

export default Header;
