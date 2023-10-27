import { Paper } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

function DirectionMainCard(props) {

  const { item, way } = props;

  return (
    <NavLink className={styles.card_link} to={way}>
      <Link component="button" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex', textAlign: 'start'}}>
        <Paper elevation={3} square={false} sx={{width: 290, height: 230, alignSelf: 'center'}}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </Paper>
      </Link>
    </NavLink>
  );
}

export default DirectionMainCard;