// Карусель с кандидатами
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

function DirectionMainCard(props) {

  const { item, wayDirection } = props;

  const cardStyle = {
    width: 290,
    height: 230,
    boxShadow: "0 0 10px 0 4px 6px rgba(176, 190, 197, 0.3)",
    position: 'relative'
  };

  const imageStyle = {
    position: 'absolute',
    bottom: '24px',
    right: '42px',
    width: '100px',
    height: '76px',
  };

  const divTopStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '16px',
    marginBottom: '12px'
  };

  const textHeaderStyle = {
    color: '#1A1B22',
    fontFamily: 'YS Display',
    fontWeight: '500',
    fontSize: '20px',
    height: '24px',
    marginBottom: '8px'
  };

  const textTopStyle = {
    fontFamily: 'YS Text',
    color: '#797981',
    fontWeight: '500',
    fontSize: '11px'
  };
  
  const textDownStyle = {
    color: '#797981',
    fontFamily: 'YS Text',
    fontWeight: '400',
    fontSize: '11px',
    height: '12px',
    marginBottom: '4px'
  };

  const textGreenrStyle = {
    color: '#FFF',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '14px',
    backgroundColor: '#87CC9E',
    borderRadius: '10px',
    padding: '2px 4px 1px 4px',
    lineHight: '14px'
  };

  return (
  <NavLink className={styles.card_link} to={wayDirection}>
    <Link component="button" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex', textAlign: 'start'}}>
      <Paper elevation={3} square={false} sx={cardStyle}>
        <Stack sx={{ padding: '24px' }}>
          <div style={ divTopStyle }>
            <Typography variant="body2" style={{ ...textTopStyle, marginRight: '12px' }}>Всего резюме:</Typography>
            <Typography variant="body2" style={{ ...textTopStyle, marginRight: '2px' }}>{item.total}</Typography>
            <Typography variant="body2" style={ textGreenrStyle }>{"+" + item.new}</Typography>
          </div>
          <Typography variant="h6" style={ textHeaderStyle }>{item.name}</Typography>
          {item.skills.map((i, index) => (
            <Typography variant="body2" style={ textDownStyle } key={index}>{i}</Typography>))
          }
        </Stack>
        <img style={ imageStyle } src={item.image} alt="Изображение" />
      </Paper>
    </Link>
  </NavLink>
  );
}

export default DirectionMainCard;
