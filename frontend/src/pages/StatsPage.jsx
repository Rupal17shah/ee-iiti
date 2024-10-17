import React from "react"
import {
  Typography,
  Box,
  Container,
  Table,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Navbar from "../components/BodyNavbar/BodyNavbar"
import { api } from "../Api"
import axios from "axios"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import PieChartComponent from "../components/PieChartComponent"
import SchoolIcon from "@mui/icons-material/School"

export default function StatsPage() {
  const param = useParams()
  const [patent, setPatent] = React.useState()
  React.useEffect(() => {
    axios
      .get(`${api}/achievements/patent/read`, {
        mode: "cors",
      })
      .then((response) => setPatent(response.data))
      .catch((error) => console.log(error.message))
  }, [])
  return (
    <div>
      <>
        <Navbar />
        {/* <MobileNavbar /> */}
        <br />
        {param?.program === "Faculty" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            {/* <center className="bg_border"> */}

            <center>
              <img
                alt="not_found"
                width="50%"
                src="/Images/faculty_number.jpg"
              />
            </center>
          </>
        ) : (
          <></>
        )}
        {param?.program === "Students" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            <center>
              <img
                alt="not_found"
                width="50%"
                src="/Images/degree.png"
              />
            </center>
          </>
        ) : (
          <></>
        )}
        {param?.program === "Publications" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            <center>
              <img alt="not_found" width="70%" src="/Images/journals2.png" />
            </center>
          </>
        ) : (
          <></>
        )}
        {param?.program === "Placements" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            <Box
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <center>
                <img
                  alt="not_found"
                  width="40%"
                  src="/Images/ug_placements.jpg"
                />
                <img
                  alt="not_found"
                  width="40%"
                  src="/Images/pg_placements.jpg"
                />
              </center>
            </Box>
          </>
        ) : (
          <></>
        )} 
        
        {param?.program === "Patents" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            <center>
             <PieChartComponent/>
              
            </center>
            <Typography textAlign="center" fontWeight="bold" variant="h1">
              Patents
            </Typography>
            <Container>
              <br />
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "secondary.main" }}>
                    <TableRow>
                      <TableCell align="left">
                        <Typography color="white">
                          Application Number
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography color="white">Patent Name</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography color="white">People</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography color="white">Year</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography color="white">Status</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patent?.map((row, key) => (
                      <TableRow
                        key={key}
                        sx={{
                          backgroundColor: key % 2 !== 0 ? "#ffd6dd7c" : "",
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell align="left">{row.uuid}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.pi}</TableCell>
                        <TableCell align="left">{row.year}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </>
        ) : (
          <></>
        )}
        {param?.program === "Projects" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            <center>
              <img
                alt="not_found"
                width="70%"
                src="/Images/projects3.png"
              />
            </center>
          </>
        ) : (
          <></>
        )}
        {param?.program === "Grants" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Statistics"
            />
            <center>
              <img
                alt="not_found"
                width="50%"
                src="/Images/project_grant.jpg"
              />
            </center>
          </>
        ) : (
          <></>
        )}

        {param?.program === "citations" ? (
          <>
            <Header
              description="EE IITI in figures and stats..."
              title="Google Scholar Citations"
            />
            {/* <img alt="not_found" width="50%" src="/Images/patent_data.jpg" /> */}
            <center>
              <Typography
                variant="h1"
                color="secondary.main"
                sx={{ fontSize: "7rem" }}
              >
                <CountUp end={45000} duration={5}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp> 
                <span>+</span>
                <br />
                ... & Counting!
              </Typography>
              <Typography
                variant="p"
                color="secondary.main"
                sx={{ fontSize: "2rem" }}
                textAlign="center"
                display={"flex"}
                justifyContent="center"
              >
                <SchoolIcon sx={{ fontSize: 40 }} />
                &nbsp; Citations
              </Typography>
            </center>
          </>
        ) : (
          <></>
        )}
        {/* </center> */}
        <br />
      </>
    </div>
  )
}
