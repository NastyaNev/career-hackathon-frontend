import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Carousel(props) {
  const { title, buttonText } = props;

  return (
    <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center'>
        <p>{title}</p>
        <Button variant="outlined">{buttonText}</Button>
    </Stack>
  )
}

export default Carousel
