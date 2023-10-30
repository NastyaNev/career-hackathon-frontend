// Карусель с просмотренными кандидатами
import { Avatar, Paper, Stack, Typography, Tooltip } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";
import pin from "../../images/map-pin.svg";
import suitcase from "../../images/briefcase.svg";
import like from "../../images/Like.svg";
import medal from "../../images/award.svg";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

function DirectionMainCardTime(props) {

  const { item, wayTime } = props;

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

  const divProfileStyleTop = {
    display: 'flex',
    alignItems: 'center',
    height: '12px',
    marginTop: '12px'
  };

  const divProfileStyleBottom = {
    display: 'flex',
    alignItems: 'center',
    height: '16px',
    marginTop: '4px'
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
    lineHeight: '24px'
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
    lineHeight: '12px',
  };

  const textDownStyleProf = {
    color: '#797981',
    fontFamily: 'YS Text',
    fontWeight: '400',
    fontSize: '11px',
    height: '12px',
  };

  const textVioletStyle = {
    display: 'flex',
    color: '#FFF',
    fontWeight: '500',
    fontSize: '11px',
    backgroundColor: '#7F67D2',
    borderRadius: '10px',
    marginTop: '12px',
    lineHeight: '12px',
    padding: '2px 4px'
  }

  const years = () => {if (item.experience === 1) {return 'год'}
    else if (item.experience > 1 && item.experience < 5) {
      return "года"
    } else {
      return 'лет'
    }
  }

  return (
    <NavLink target="_blank" className={styles.card_link} to={wayTime}>
      <Tooltip title={`Перейти в анкету ${item.name}`} >
        <Paper elevation={3} square={false} sx={cardStyle}>
          <Stack sx={ stackStyle }>
            <div>
              <Stack direction='row' justifyContent='space-between' sx={{width: 224}}>
                <Typography variant="body2" style={ textTopGreenStyle }>&#9679; была сегодня</Typography>
                <img src={like} alt="лайк" />
              </Stack>
              <Stack direction='row' spacing={2} sx={{alignItems: 'center'}} mt={1}>
                <Avatar src={item.avatar} alt="аватар" />
                <div>
                  <Typography variant="h6" style={ textHeaderStyle }>{item.name}</Typography>
                  <Typography variant="body2" style={ textDownStyleProf }>{item.profession}</Typography>
                </div>
              </Stack>
                <div style={ divProfileStyleTop }>
                  <img src={pin} alt="локация" />
                  <Typography variant="body2" style={ textDownStyleProf } ml={1}>{item.city}</Typography>
              </div>
              <div style={ divProfileStyleBottom }>
              <img src={suitcase} alt="чемодан" />
                <Typography variant="body2" style={ textDownStyleProf } ml={1}>{item.prev}</Typography>
              </div>
              <Stack direction='row' alignItems='center' spacing={2}>
                <Typography variant="body2" style={{ ...textVioletStyle, marginTop: '16px', marginBottom: '20px' }}>{item.experience} {years()}</Typography>
                <img src={medal} alt="награда" />
              </Stack>
            </div>
            <div style={ divDownStyle }>
              <Typography variant="body2" style={{ ...textDownStyle, marginRight: '12px' }}>Просмотренно:</Typography>
              <Typography variant="body2" style={ textDownStyle }>вчера, 20.10.23</Typography>
            </div>
          </Stack>
        </Paper>
        </Tooltip>
      </NavLink>
  );
}

export default DirectionMainCardTime;
