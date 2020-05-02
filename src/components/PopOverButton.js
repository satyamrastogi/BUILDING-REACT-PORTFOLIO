import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
// props you can add onClick task to perform while popOver 
// one can add text to the popover
//and color of the button
export default function PopOverButton(props) {
    const clickHandler = () => {
        props.onTask();
      };
  return (
    <PopupState variant="popover" popupId="share-button">
      {popupState => (
        <div>
          <Button
            size="small"
            onClick={clickHandler()}
            color={props.button.color}
            {...bindTrigger(popupState)}
          >
            {props.button.name}
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Box p={1}>
            <Typography>{props.button.text}</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
