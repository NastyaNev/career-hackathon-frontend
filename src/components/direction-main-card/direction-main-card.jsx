import { Paper } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";

function DirectionMainCard(props) {

  const { item } = props;

  return (
    <Paper elevation={3} square={false} sx={{width: 290, height: 230}}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Paper>
  );
}

export default DirectionMainCard;