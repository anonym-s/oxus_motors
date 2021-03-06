import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import './brand.css';
import _ from 'lodash';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Paper,
  CardActionArea,
  Grid,
  CardContent,
  useMediaQuery,
  CardHeader,
  Divider
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: "linear-gradient(white, #d9d7d7, white)"
  },
  Paper: {
    padding: "20px",
    [theme.breakpoints.up('sm')]:{
      transform: "scale(0.8)"
    }
  }
}))

export default function Brands() {
  
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(700));


    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      centerPadding:(matches)?"0 0 60px": "0px 0px 150px",
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 1,
      slidesPerRow: (matches)? 3 : 5,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
          }
      ]
    };
    const settings1 = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      centerPadding:(matches)?"0px 0px 0px": "0px 0px 0px",
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 1,
      slidesPerRow: (matches)? 3 : 5,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
          }
      ]
    };

  let logoList1 = [];
  for (var i=0; i < 15; i++) {
    logoList1.push(`https://robohash.org/${i}?100*100`)
  }
  let logoList = [];
  for (var i=15; i < 30; i++) {
    logoList.push(`https://robohash.org/${i}?100*100`)
  }

  return(
    <div className={classes.root}>
      <Slider {...settings} 
      style={(matches)? {marginBottom:"-20px"}:{marginRight: "0px", marginBottom:"-85px"}}
      >
        {logoList.map((item) => (
          <div id='paper' key={uuidv4()}>
            {/* <Paper className={classes.Paper} elevation={7} > */}
              <img src={item} alt="abc" />
            {/* </Paper> */}
          </div>
        ))}
      </Slider>
      <Slider {...settings1} 
      style={(matches)?{marginTop:"-20px"}:{marginLeft: "0px", marginTop:"-85px"}}
      >
        {logoList1.map((item) => (
          <div  id='paper' key={uuidv4()}>
            {/* <Paper className={classes.Paper} elevation={7} > */}
              <img src={item} alt="abc" />
            {/* </Paper> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}