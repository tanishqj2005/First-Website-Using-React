import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem link="/projects">Projects</NavigationItem>
  </ul>
);

export default navigationItems;
