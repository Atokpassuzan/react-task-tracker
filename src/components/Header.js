import React from "react"; // don't need
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  //const Header = (props) => {

  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h1>{props.title}</h1> */}
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS

// const headingStyle = {
//   color: "green",
//   backgroundColor: "black",
// };

export default Header;
