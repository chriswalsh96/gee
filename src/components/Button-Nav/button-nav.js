import React from "react";
import PropTypes from "prop-types";
import { Button, NavCounter } from "../Button-Nav/style";

const ButtonNav = (props) => {
  return (
    <Button
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      color={props.color}
      backgroundUrl={props.backgroundUrl}
    >
      {props.text}
      <NavCounter>{props.stockCounter}</NavCounter>
    </Button>
  );
};

ButtonNav.propTypes = {
  width: PropTypes.string,
};

ButtonNav.defaultProps = {
  width: "176px",
  height: "20px",
  color: "black",
  text: "N/A",
  backgroundUrl: "",
};

export default ButtonNav;
