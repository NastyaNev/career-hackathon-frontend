import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "./carousel.module.css";
import React from "react";
import DirectionMainCard from "../direction-main-card/direction-main-card";
import Carousel from 'react-elastic-carousel';

function Car(props) {
  const { title, buttonText } = props;

  const items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!"
     },
    {
        name: "Random Name #4",
        description: "Hello World!"
    },
    {
      name: "Random Name #5",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #6",
      description: "Hello World!"
    }
  ]

  return (
    <Stack>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center'>
          <p>{title}</p>
          <Button variant="outlined">{buttonText}</Button>
      </Stack>
          <Carousel itemsToShow={4} itemsToScroll={2}  >
          {
              items.map( (item, i) => <DirectionMainCard key={i} item={item} /> )
          }
          </Carousel>
    </Stack>
  )
}

export default Car