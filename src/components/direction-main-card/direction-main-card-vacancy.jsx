// Карусель с вакансиями
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";
import pin from "../../images/map-pin.svg";
import suitcase from "../../images/briefcase.svg";

function DirectionMainCardVacancy(props) {
  const { item } = props;

  const cardStyle = {
    width: 290,
    height: 230,
    boxShadow: "0 0 10px 0 4px 6px rgba(176, 190, 197, 0.3)",
    backgroundColor: '#F1F6FF'
  };

  const stackStyle = {
    padding: '24px',
    height: '182px',
    display: 'flex', 
    lexDirection: 'column'
  };

  const divTopStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '16px',
    marginBottom: '12px'
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
    marginBottom: '14px',
    marginTop: '12px',
    lineHeight: '24px'
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

  const textRedStyle = {
    color: '#FFF',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '14px',
    backgroundColor: '#FF0200',
    borderRadius: '10px',
    padding: '2px 4px',
    borderRadius: '10px',
    height: '14px'
  }


  return (
    <Paper elevation={3} square={false} sx={ cardStyle }>
      <Stack sx={ stackStyle }>
        <div style={divTopStyle}>
          <Typography variant="body2" style={{ ...textTopStyle, marginRight: '12px' }}>Всего откликов:</Typography>
          <Typography variant="body2" style={{ ...textTopStyle, marginRight: '2px' }}>80</Typography>
          <Typography variant="body2" style={ textRedStyle }>+12</Typography>
        </div>
        <div>
          <Typography variant="body2" style={ textTopStyle }>{item.company}</Typography>
          <Typography variant="h6" style={ textHeaderStyle } mb={1.5}>{item.name}</Typography>
          <div style={ divProfileStyle } >
            <img src={pin} alt="локация" />
            <Typography variant="body2" style={ textDownStyle } ml={1}>{item.city}</Typography>
          </div>
          <div style={ divProfileStyle }>
          <img src={suitcase} alt="чемодан" />
            <Typography variant="body2" style={ textDownStyle } ml={1}>{"от " + item.experience + " лет"}</Typography>
          </div>
        </div>
        <div style={ divDownStyle }>
          <Typography variant="body2" style={{ ...textDownStyle, marginRight: '12px' }}>Обновлено:</Typography>
          <Typography variant="body2" style={ textDownStyle }>вчера, 20.10.23</Typography>
        </div>
      </Stack>
    </Paper>
  );
}

export default DirectionMainCardVacancy;