// Карусель с просмотренными кандидатами
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";

function DirectionMainCard(props) {
  const { item } = props;

  const cardStyle = {
    width: 290,
    height: 230,
    boxShadow: "0 0 10px 0 4px 6px rgba(176, 190, 197, 0.3)"
  };

  const stackStyle = {
    padding: '24px',
    height: '182px',
    display: 'flex', 
    lexDirection: 'column'
  };

  const divProfileStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '16px',
    marginBottom: '4px'
  };

  const divDownStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '16px',
    marginTop: 'auto'
  };

  const textHeaderStyle = {
    color: '#1A1B22',
    fontFamily: 'YS Display',
    fontWeight: '500',
    fontSize: '20px',
    height: '24px',
    marginBottom: '8px'
  };

  const textTopGreenStyle = {
    fontFamily: 'YS Text',
    color: '#87CC9E',
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

  const textVioletStyle = {
    display: 'flex',
    color: '#FFF',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '16px',
    backgroundColor: '#7F67D2',
    borderRadius: '50%',
    marginTop: '12px',
    padding: '2px 4px',
    display: 'inline-block'
  }

  return (
    <Paper elevation={3} square={false} sx={cardStyle}>
      <Stack sx={ stackStyle }>
        <div>
          <Typography variant="body2" style={ textTopGreenStyle }>&#9679; была сегодня</Typography>
          <div>
            <img/> {/* нужно добавить аватар их массива*/}
            <div>
              <Typography variant="h6" style={ textHeaderStyle }>{item.name}</Typography>
              <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography>
            </div>
          </div>
            <div style={ divProfileStyle }>
            <img/> {/* нужно добавить иконку и свойства*/}
              <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography>
          </div>
          <div style={ divProfileStyle }>
            <img/> {/* нужно добавить иконку и свойства */}
            <Typography variant="body2" style={ textDownStyle }>{item.description}</Typography>
          </div>
          <div>
            <Typography variant="body2" style={ textVioletStyle }>+12 лет</Typography>
          </div>
        </div>
        <div style={ divDownStyle }>
          <Typography variant="body2" style={{ ...textDownStyle, marginRight: '12px' }}>Просмотренно:</Typography>
          <Typography variant="body2" style={ textDownStyle }>вчера</Typography>
        </div>
      </Stack>
    </Paper>
  );
}

export default DirectionMainCard;
