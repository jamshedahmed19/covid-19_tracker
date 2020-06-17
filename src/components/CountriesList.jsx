import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Card from "@material-ui/core/Card";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Grid, Badge } from "@material-ui/core";
import { useContext } from "react";
import { CountriesListContext } from "../Context/CountriesListContext";
import { Radar, Doughnut } from "react-chartjs-2";
import uuid from "uuid/v4";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  remaining: {
    fontSize: "16px",
    fontWeight: "500",
  },
  recovered: {
    color: "#33741F",
    fontSize: "16px",
    fontWeight: "500",
  },
  confirmed: {
    color: "#DE8200",
    fontSize: "16px",
    fontWeight: "500",
  },
  deaths: {
    color: "#C52227",
    fontSize: "16px",
    fontWeight: "500",
  },
  flex: {
    display: "flex",
  },
});

export default function CountriesList() {
  const { countriesData } = useContext(CountriesListContext);
  const classes = useRowStyles();
  const [open, setOpen] = React.useState(false);

  function increaseDecrease(data) {
    if (data > 0) {
      return (
        <Badge badgeContent={data} max={9999} showZero>
          <KeyboardArrowUpIcon className={classes.arrow} />
        </Badge>
      );
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead style={{ backgroundColor: "#121212", color: "#fff" }}>
          <TableRow>
            <TableCell />
            <TableCell style={{ color: "#fff" }}>Flag</TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Country
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Population
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Infected
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Recovered
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Deaths
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Critical
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Active
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="left">
              Tests Done
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countriesData.map((countryData) => {
            return (
              <React.Fragment>
                <TableRow key={uuid()} className={classes.root}>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <img
                      style={{ width: "35px" }}
                      src={countryData.countryInfo.flag}
                      alt="Flag"
                    ></img>
                  </TableCell>
                  <TableCell className={classes.remaining} align="left">
                    {countryData.country}
                  </TableCell>
                  <TableCell className={classes.remaining} align="left">
                    {new Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 3,
                    }).format(countryData.population)}
                  </TableCell>
                  <TableCell className={classes.confirmed} align="left">
                    <div className={classes.flex}>
                      {new Intl.NumberFormat("en-US", {
                        maximumSignificantDigits: 3,
                      }).format(countryData.cases)}
                      {increaseDecrease(countryData.todayCases)}
                    </div>
                  </TableCell>
                  <TableCell className={classes.recovered} align="left">
                    <div className={classes.flex}>
                      {new Intl.NumberFormat("en-US", {
                        maximumSignificantDigits: 3,
                      }).format(countryData.recovered)}
                      {increaseDecrease(countryData.todayRecovered)}
                    </div>
                  </TableCell>
                  <TableCell className={classes.deaths} align="left">
                    <div className={classes.flex}>
                      {new Intl.NumberFormat("en-US", {
                        maximumSignificantDigits: 3,
                      }).format(countryData.deaths)}
                      {increaseDecrease(countryData.todayDeaths)}
                    </div>
                  </TableCell>
                  <TableCell className={classes.remaining} align="left">
                    {new Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 3,
                    }).format(countryData.critical)}
                  </TableCell>
                  <TableCell className={classes.remaining} align="left">
                    {new Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 3,
                    }).format(countryData.active)}
                  </TableCell>
                  <TableCell className={classes.remaining} align="left">
                    {new Intl.NumberFormat("en-US", {
                      maximumSignificantDigits: 3,
                    }).format(countryData.tests)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={10}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                          Per Million Stats
                        </Typography>
                        <Grid container>
                          <Grid item xs={0} md={1} />
                          <Grid item xs={12} md={10}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Infected Pm</TableCell>
                                  <TableCell>Recovered Pm</TableCell>
                                  <TableCell>Deaths Pm</TableCell>
                                  <TableCell>Critical Pm</TableCell>
                                  <TableCell>Active Pm</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell
                                    className={classes.confirmed}
                                    align="left"
                                  >
                                    {new Intl.NumberFormat("en-US", {
                                      maximumSignificantDigits: 3,
                                    }).format(countryData.casesPerOneMillion)}
                                  </TableCell>
                                  <TableCell
                                    className={classes.recovered}
                                    align="left"
                                  >
                                    {new Intl.NumberFormat("en-US", {
                                      maximumSignificantDigits: 3,
                                    }).format(
                                      countryData.recoveredPerOneMillion
                                    )}
                                  </TableCell>
                                  <TableCell
                                    className={classes.deaths}
                                    align="left"
                                  >
                                    {new Intl.NumberFormat("en-US", {
                                      maximumSignificantDigits: 3,
                                    }).format(countryData.deathsPerOneMillion)}
                                  </TableCell>
                                  <TableCell
                                    className={classes.remaining}
                                    align="left"
                                  >
                                    {new Intl.NumberFormat("en-US", {
                                      maximumSignificantDigits: 3,
                                    }).format(
                                      countryData.criticalPerOneMillion
                                    )}
                                  </TableCell>
                                  <TableCell
                                    className={classes.remaining}
                                    align="left"
                                  >
                                    {new Intl.NumberFormat("en-US", {
                                      maximumSignificantDigits: 3,
                                    }).format(countryData.activePerOneMillion)}
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                            <br />
                          </Grid>
                          <Grid item xs={0} md={1} />
                        </Grid>

                        <Grid container spacing={10}>
                          <Grid item xs={1} />
                          <Grid item xs={3}>
                            <Card>
                              <br></br>
                              <Typography
                                className={classes.heading}
                                align="center"
                              >
                                {countryData.country} Daily
                              </Typography>
                              <br></br>
                              <Doughnut
                                data={{
                                  labels: ["Infected", "Recovered", "Deaths"],
                                  datasets: [
                                    {
                                      label: "GlobalStats",
                                      backgroundColor: [
                                        "#ff9800",
                                        "#4caf50",
                                        "#f44336",
                                      ],
                                      borderColor: [
                                        "#ff9800",
                                        "#4caf50",
                                        "#f44336",
                                      ],
                                      data: [
                                        countryData.todayCases,
                                        countryData.todayRecovered,
                                        countryData.todayDeaths,
                                      ],
                                    },
                                  ],
                                }}
                                options={{
                                  responsive: true,
                                  legend: { display: false },
                                  title: { display: false },
                                }}
                              />
                              <br></br>
                            </Card>
                          </Grid>
                          <Grid item xs={3}>
                            <Card>
                              <br></br>
                              <Typography
                                className={classes.heading}
                                align="center"
                              >
                                {countryData.country} Stats Total
                              </Typography>
                              <br></br>
                              <Radar
                                data={{
                                  labels: [
                                    "Infected",
                                    "Recovered",
                                    "Deaths",
                                    "Active",
                                    "Critical",
                                  ],
                                  datasets: [
                                    {
                                      label: "GlobalStats",
                                      backgroundColor: "rgba(255,150,0,0.25)",
                                      borderColor: "rgba(255,152,0,0.45)",
                                      pointRadius: 0,
                                      data: [
                                        countryData.cases,
                                        countryData.recovered,
                                        countryData.deaths,
                                        countryData.active,
                                        countryData.critical,
                                      ],
                                    },
                                  ],
                                }}
                                options={{
                                  responsive: true,
                                  legend: { display: false },
                                  title: { display: false },
                                  scale: {
                                    ticks: {
                                      display: false,
                                    },
                                  },
                                }}
                              />
                              <br></br>
                            </Card>
                          </Grid>
                          <Grid item xs={3}>
                            <Card>
                              <br></br>
                              <Typography
                                className={classes.heading}
                                align="center"
                              >
                                {countryData.country} Stats Per Million
                              </Typography>
                              <br></br>
                              <Radar
                                data={{
                                  labels: [
                                    "Infected Pm",
                                    "Recovered Pm",
                                    "Deaths Pm",
                                    "Active Pm",
                                    "Critical Pm",
                                  ],
                                  datasets: [
                                    {
                                      label: "Country Stats Per Million",
                                      backgroundColor: "rgba(231,67,61, 0.45)",
                                      borderColor: "rgba(231,67,61,0.45)",
                                      pointRadius: 0,
                                      data: [
                                        countryData.casesPerOneMillion,
                                        countryData.recoveredPerOneMillion,
                                        countryData.deathsPerOneMillion,
                                        countryData.activePerOneMillion,
                                        countryData.criticalPerOneMillion,
                                      ],
                                    },
                                  ],
                                }}
                                options={{
                                  responsive: true,
                                  legend: { display: false },
                                  title: { display: false },
                                  scale: {
                                    ticks: {
                                      display: false,
                                    },
                                  },
                                }}
                              />
                              <br></br>
                            </Card>
                          </Grid>
                          <Grid item xs={1} />
                        </Grid>
                        <br></br>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
