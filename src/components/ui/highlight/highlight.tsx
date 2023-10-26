import React, { ReactNode } from "react";
import classNames from 'classnames';
import Box from '@mui/material/Box';
import { Link } from "@mui/material";


import styles from './styles.module.css'

interface IHighlightProps {
  text: string;
  notifications: number;
  icon: string;
  boxType: 'tasks' | 'awaiting' | 'work';
}

const Highlight = ({ text, notifications, icon, boxType } : IHighlightProps) => {
  return <Link href="#" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, color: '#1a1b22', fontFamily: 'YS Text', fontWeight: 500}}
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
      <span className={styles.highlight_span}>{notifications}</span>
  </Link>
}


export default Highlight;
