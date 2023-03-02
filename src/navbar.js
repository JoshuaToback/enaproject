import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from "./images/enaP.png"

export default function Navbar() {
  const [activePetal, setActivePetal] = useState(0);

  // In actual final, these are hardcoded
  const petals = [
    {link: '/Game', text: 'Further Skies'},
    {link: '/Cast', text: 'Cast'},
    {link: '/Setting', text: 'Setting'},
    {link: '/Contact', text: 'Contact'},
    {link: '/Crew', text: 'Meet the Crew'},
    {link: '/About', text: 'About Us'}
  ];

  const onClick = (index) => (event) => {
    setActivePetal(index);
  };

  return (
    <div className="nav petal">
        <ul className="petal-list">
            {petals.map(({ link, text, id }, index) => {
              const angle = 1.0*(index - activePetal) / petals.length;

              const petalTransformation = { transform: `rotate(${angle}turn)` };
              const textTransformation = { transform: `rotate(-${angle}turn)` };
              
              return (
                <li className="petal-wrapper" key={index} style={petalTransformation}>
                  <div className="petal-leaf">
                    <CustomLink className="link" to={link} onClick={onClick(index)}>
                      <span style={textTransformation}>
                        {text}
                      </span>
                    </CustomLink>
                  </div>
                </li>
              );
            })}
        </ul>
        <div id="pCenter" className="petal-center">
            <img src={logo} alt="enaProject"></img>
        </div>
    </div>
  );
}


function CustomLink({ to, children, ...props }) {
  return (
      <li>
      <Link to = {to} {...props}>
      { children }
      </Link>
      </li>
  )
}