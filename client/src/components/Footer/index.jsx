import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with React & Bootstrap</p>
      <p>Copyright ⓒ {year} Jason Ng</p>
    </footer>
  );
}

export default Footer;
