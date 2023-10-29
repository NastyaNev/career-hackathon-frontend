import * as React from "react";
import {
  Stack,
  Typography,
  MenuItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Box,
} from "@mui/material";
import arrowDown from "../../images/arrow_down_black.svg";
import arrowUp from "../../images/arrow_up.svg";
import styles from "./drop-down-menu.module.css";

function DropDownMenu({ nameFilter, options }) {
  let bool = () => {
    if (options.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const [open, setOpen] = React.useState(bool);

  const handleClick = () => {
    if (options.length === 0) {
      setOpen(false);
    } else {
      setOpen((prev) => !prev);
    }
  };

  return (
    <>
      <Box sx={{display: 'flex', backgroundColor: '#dde0e4', color: 'black', width: '100%', borderRadius: '4px', height: '40px', marginTop: '12px', padding: '0'}} className={styles.select}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center" onClick={handleClick}   sx={{width: '100%'}}>
          <Typography
            ml={1.5}
            sx={{ fontSize: "16px", fontWeight: 500, lineHeight: "20px" }}
          >
            {nameFilter}
          </Typography>
          <img
            className={styles.arrow}
            src={open ? arrowUp : arrowDown}
            alt="развернуть"
          />
        </Stack>
      </Box>
      {open ? (
        <Stack sx={{ p: "12px 8px 0 8px", gap: "8px" }}>
          {options.map((option) => (
            <MenuItem
              key={option}
              value={nameFilter}
              sx={{ padding: 0 }}
              className={styles.options}
            >
              <ListItemIcon sx={{ height: "20px" }}>
                <Checkbox />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={option}
                sx={{ padding: 0 }}
                className={styles.options}
              />
            </MenuItem>
          ))}
        </Stack>
      ) : null}
    </>
  );
}

export default DropDownMenu;
