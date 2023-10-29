import { Stack } from "@mui/system";
import styles from "./slide-gallery.module.css";
import React, { useRef, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import SlideGalleryArrow from "./slide-gallery-arrow/slide-gallery-arrow";
import RenderComponent from "./render-component/render-component";

function SlideGallery({ card, items }) {
  const Card = card;

  const carousel = useRef();
  const [disabledPrevArrow, setDisabledPrevArrow] = useState(true);
  const [disabledNextArrow, setDisabledNextArrow] = useState(true);

  return (
    <Stack className={styles.carousel_container}>
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
              isEdge={disabledNextArrow}
            />
        </Stack>
        <Carousel
          ref={carousel}
          itemsToShow={4}
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
            <Card key={i} item={item} wayDirection='#' wayVacancies='/vacancies/vacancy' wayTime='/candidates/candidate'/>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
}

export default SlideGallery;
