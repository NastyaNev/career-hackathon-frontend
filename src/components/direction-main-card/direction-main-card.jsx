// Карусель с кандидатами
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";

function DirectionMainCard(props) {
  const { item } = props;

  const cardStyle = {
    width: 290,
    height: 230,
    boxShadow: "0 0 10px 0 4px 6px rgba(176, 190, 197, 0.3)",
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
    lineHeight: '12px',
    backgroundColor: '#87CC9E',
    borderRadius: '50%',
    padding: '2px 4px'
  }

  return (
    <Paper elevation={3} square={false} sx={cardStyle}>
      <Stack sx={{ padding: '24px' }}>
        <img
          src={item.image}
          alt="Изображение"
          style={imageStyle}
        />
        <div style={ divTopStyle }>
          <Typography variant="body2" style={{ ...textTopStyle, marginRight: '12px' }}>Всего резюме:</Typography>
          <Typography variant="body2" style={{ ...textTopStyle, marginRight: '2px' }}>80</Typography>
          <Typography variant="body2" style={ textGreenrStyle }>+12</Typography>
        </div>
        <Typography variant="h6" style={ textHeaderStyle }>{item.name}</Typography>
        <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography> {/* продублировала для наглядности на макете*/}
        <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography>
        <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography>
        <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography>
      </Stack>
    </Paper>
  );
}

export default DirectionMainCard;
