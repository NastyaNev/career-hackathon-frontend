import React, { ReactNode } from "react";
import classNames from 'classnames'
import Box from '@mui/material/Box';

import styles from './styles.module.css'

interface IHighlightProps {
  text: string;
  notifications: number;
  icon: string;
  boxType: 'tasks' | 'awaiting' | 'work';
}

const Highlight = ({ text, notifications, icon, boxType } : IHighlightProps) => {
  return <Box
    className={classNames(styles.box, styles[`box--${boxType}`])}
  >
      <Box
        component="img"
        sx={{
          height: 32,
          width: 32,
        }}
        alt="list"
        src={icon}
      />
      <span className={styles.text}>{text}</span>
      <span>{notifications}</span>
  </Box>
}


export default Highlight;
