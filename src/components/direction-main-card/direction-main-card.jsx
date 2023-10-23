import { Paper } from "@mui/material";
import React from "react";

function DirectionMainCard(props) {

  const { item } = props;

  return (
    // <div>direction-main-card</div>
    <Paper elevation={3} square={false} sx={{width: 272, height: 200}}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </Paper>
  );
}

export default DirectionMainCard;