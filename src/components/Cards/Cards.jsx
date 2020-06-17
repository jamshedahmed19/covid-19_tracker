import React, { useContext } from "react";
import { Card, CardContent, Typography, Grid, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GlobalContext } from "../../Context/GlobalContext";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "500",
  },
  recovered: {
    color: "#33741F",
    fontSize: "28px",
    fontWeight: "500",
  },
  confimed: {
    color: "#DE8200",
    fontSize: "28px",
    fontWeight: "500",
  },
  deaths: {
    color: "#C52227",
    fontSize: "28px",
    fontWeight: "500",
  },
});

export default function Cards() {
  const { globalData } = useContext(GlobalContext);
  const confirmed = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(globalData.cases);
  const recovered = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(globalData.recovered);
  const deaths = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(globalData.deaths);
  const classes = useStyles();

  function increaseDecrease(data) {
    if (data > 0) {
      return (
        <Badge badgeContent={data} max={99999} showZero>
          <KeyboardArrowUpIcon className={classes.arrow} />
        </Badge>
      );
    }
  }

  return (
    <div>
      <Grid style={{ marginTop: "30px" }} container spacing={1}>
        <Grid item xs={10} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.heading}
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Infected
              </Typography>
              <Typography
                className={classes.confimed}
                align="center"
                variant="h5"
                component="h2"
              >
                {confirmed}
                {increaseDecrease(globalData.todayCases)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.heading}
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Recovered
              </Typography>
              <Typography
                className={classes.recovered}
                align="center"
                variant="h5"
                component="h2"
              >
                {recovered}
                {increaseDecrease(globalData.todayRecovered)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.heading}
                align="center"
                color="textSecondary"
                gutterBottom
              >
                Deaths
              </Typography>
              <Typography
                className={classes.deaths}
                align="center"
                variant="h5"
                component="h2"
              >
                {deaths}
                {increaseDecrease(globalData.todayDeaths)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
