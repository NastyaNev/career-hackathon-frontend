import { Button, Paper } from "@mui/material";
import React from "react";
import Carousel, { consts } from 'react-elastic-carousel';
import arrowLeft from '../../../images/arrow_left.svg';
import arrowRight from '../../../images/arrow_right.svg';
import styles from "./slide-gallery-arrow.module.css";

function SlideGalleryArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <img src={arrowLeft} alt='Стрелка влево' /> : <img src={arrowRight} alt='Стрелка вправо' />
    const className = type === consts.PREV ? styles.leftArrow : styles.rightArrow;

    return (
      <Button onClick={onClick} disabled={isEdge} className={className} >
        <Paper elevation={3} sx={{height: 24, width: 24, background: '#f9fafb'}}>
            {pointer}
        </Paper>
      </Button>
    )
  }

export default SlideGalleryArrow