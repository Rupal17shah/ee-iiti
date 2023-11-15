import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import "../styles/program.css";
export default function Program() {
  return (
    <div>
      <div>
        <Container>
          <Typography variant="h1" color="black" paddingY={5}>
            PROGRAMS OFFERED
          </Typography>
          <div>
            <Grid
              container
              justifyContent={"space-around"}
              alignItems={"center"}
              pb={9}
            >
              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                }}
                className="programBg1"
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    height: "150px",
                    width: "150px",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{
                      width: "150px",
                    }}
                  >
                    B.Tech.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                }}
                className="programBg2"
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{ width: "150px" }}
                  >
                    M.Tech.
                  </Typography>
                </div>
              </Grid>

              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                }}
                className="programBg3"
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                    alignItems: "center",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{ width: "150px" }}
                  >
                    M.S.
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                sx={{
                  width: "150px",
                  height: "150px",
                  marginY: "10px",
                }}
                className="programBg4"
              >
                <div
                  className="programBgColor"
                  style={{
                    display: "flex",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                    alignItems: "center",
                    width: "150px",
                    height: "150px",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    variant="h1"
                    align="center"
                    color={"white"}
                    sx={{ width: "150px" }}
                  >
                    Ph.D.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
}
