import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "./slide-gallery.module.css";
import React, { useEffect, useRef, useState } from "react";
import DirectionMainCard from "../direction-main-card/direction-main-card";
import Carousel, { consts } from "react-elastic-carousel";
import SlideGalleryArrow from "./slide-gallery-arrow/slide-gallery-arrow";
import RenderComponent from "./render-component/render-component";

function SlideGallery(props) {
  const { title, buttonText } = props;
  const carousel = useRef();
  const [disabledPrevArrow, setDisabledPrevArrow] = useState(true);
  const [disabledNextArrow, setDisabledNextArrow] = useState(true);

  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
    {
      name: "Random Name #5",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #6",
      description: "Hello World!",
    },
  ];

  return (
    <Stack>
      <Stack
        direction="row"
        useFlexGap
        justifyContent="space-between"
        alignItems="center"
        mb={2.375}
      >
        <p className={styles.title}>{title}</p>
        <Button
          variant="outlined"
          sx={{ width: 130, height: 40, padding: 0, marginRight: "40px" }}
        >
          {buttonText}
        </Button>
      </Stack>
      <Stack sx={{position: 'relative'}}>
        <Stack direction="row" useFlexGap gap={1.5} className={styles.buttons_container}>
            <SlideGalleryArrow
              type={consts.PREV}
              onClick={() => {
                carousel.current.slidePrev();
              }}
              isEdge={disabledPrevArrow}
            />
            <SlideGalleryArrow
              type={consts.NEXT}
              onClick={() => {
                carousel.current.slideNext();
              }}
            />
        </Stack>
        <Carousel
          ref={carousel}
          itemsToShow={3}
          itemsToScroll={2}
          renderArrow={({ type, onClick, isEdge }) => {
            return (
              <RenderComponent
                type={type}
                isEdge={isEdge}
                updateDisabledState={(type, isEdge) => {
                  if (type === consts.PREV && disabledPrevArrow != isEdge) {
                    setDisabledPrevArrow(isEdge);
                  }

                  if (type === consts.NEXT && disabledNextArrow != isEdge) {
                    setDisabledNextArrow(isEdge);
                  }
                }}
              />
            );
          }}
        >
          {items.map((item, i) => (
            <DirectionMainCard key={i} item={item} />
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
}

export default SlideGallery;
