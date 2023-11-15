import { Grid, Typography, Box } from "@mui/material";
import React from "react";

const NoteFromHOD = () => {
  return (
    <>
      <Box
        className="hod-note"
        sx={{
          backgroundColor: "#b2103f",
          padding: "4% 2%",
          marginLeft: { xs: "0", md: "100px" },
        }}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          {/* <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <img
              className="note-img"
              src="/Images/people/vivek.png"
              alt=""
              width="200"
            />
          </Grid> */}
          <Grid item xs={12} sm={6} md={9} lg={9} xl={9} sx={{ mb: 3, px: 4 }}>
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{ borderBottom: "2px solid #fff", color: "white" }}
            >
              From the Head's Desk
            </Typography>
            <br />
            <Typography variant="p" color="white" sx={{ lineHeight: 1.5 }}>
              As the Head of the Electrical Department, I welcome you to our
              website, where you can find information about our academic programs, events and research activities. At IIT Indore, we are committed to
              providing our students with an exceptional education that prepares
              them for successful careers in Electrical Engineering. We offer
              undergraduate and graduate programs in Electrical Engineering that
              are designed to give our students a strong foundation in the
              fundamentals of the field, while also exposing them to the latest
              research and technologies. Our students have opportunities to work
              on research projects, participate in internships, and engage with
              industry through our industry partnerships. I invite you to
              explore our website to learn more about our department and our
              academic programs. If you have any questions or would like to
              learn more about what we have to offer, please do not hesitate to
              contact us. Thank you for your interest in the Electrical
              Enginnering Department at IIT Indore.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NoteFromHOD;
