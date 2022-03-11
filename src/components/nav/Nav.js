import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    })
  }, [])
  return (
    <div className={`nav ${navbar && "nav__black"}`}>
      <img className="nav__logo" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png" alt="Netflix" />
      <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
    </div>
  );
}

export default Nav;
