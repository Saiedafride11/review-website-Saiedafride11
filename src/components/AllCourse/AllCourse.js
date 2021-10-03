import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AllCourse = (props) => {
  const { title, mentor_name, course_img, serial } = props.course;
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <h6><strong>{title}</strong></h6>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              <p><small><strong>Mentor: </strong>{mentor_name}</small></p>
            </Typography>
            <Link to="/course" style={{ textDecoration: "none" }}>
              <Button variant="contained">Course Details</Button>
            </Link>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "300px" }}
          image={course_img}
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default AllCourse;
