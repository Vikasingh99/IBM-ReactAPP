import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;

// 'rafce' shortcut : it will give you the ract functional component.
