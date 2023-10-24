import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "./slide-gallery.module.css";
import React from "react";
import DirectionMainCard from "../direction-main-card/direction-main-card";
import Carousel, { consts } from 'react-elastic-carousel';
import SlideGalleryArrow from "./slide-gallery-arrow/slide-gallery-arrow";

function SlideGallery(props) {
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
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' mb={2.375}>
          <p className={styles.title}>{title}</p>
          <Button variant="outlined" sx={{width: 130, height: 40, padding: 0, marginRight: '40px'}} >{buttonText}</Button>
      </Stack>
          <Carousel itemsToShow={3} itemsToScroll={2} renderArrow={SlideGalleryArrow}>
          {
              items.map( (item, i) => <DirectionMainCard key={i} item={item} /> )
          }
          </Carousel>
    </Stack>
  )
}

export default SlideGallery