import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import Cards from "./Cards/Cards.jsx";
import SpyderChart from "./Chart/SpyderChart.jsx";
import { makeStyles } from "@material-ui/core/styles";
import CountriesList from "./CountriesList.jsx";
import SpyderChartDaily from "./Chart/SpyderChartDaily.jsx";
import SpyderChartPerMillion from "./Chart/SpyderChartPerMillion.jsx";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "60px",
  },
});

export default function Structure() {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={1} md={2} />
      <Grid item xs={10} md={8}>
        <Cards></Cards>
      </Grid>
      <Grid item xs={1} md={2} />
      <Grid item xs={1} md={2} />
      <Grid item xs={10} md={8}>
        <Card>
          <Typography className={classes.heading} align="center">
            Global Stats Total
          </Typography>
          <SpyderChart />
          <br></br>
        </Card>
      </Grid>
      <Grid item xs={1} md={2} />
      <Grid item xs={1} md={2} />
      <Grid item xs={10} md={4}>
        <Card>
          <Typography className={classes.heading} align="center">
            Global Stats Daily
          </Typography>
          <SpyderChartDaily />
          <br></br>
        </Card>
      </Grid>
      <Grid item xs={10} md={4}>
        <Card>
          <Typography className={classes.heading} align="center">
            Global Stats Per Million
          </Typography>
          <SpyderChartPerMillion />
          <br></br>
        </Card>
      </Grid>
      <Grid item xs={1} md={2} />
      <Grid item xs={1} md={1} />
      <Grid item xs={10} md={10}>
        <CountriesList />
      </Grid>
      <Grid item xs={1} md={1} />
    </Grid>
  );
}
