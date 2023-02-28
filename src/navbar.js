import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  const [activePetal, setActivePetal] = useState(0);

  // In actual final, these are hardcoded
  const petals = [];
  for (let i = 0; i < 6; ++i) {
    petals.push({
      link: '/',
      text: i,
      id: `p${i}`,
    });
  }

  const onClick = (index) => (event) => {
    setActivePetal(index);
  };

  return (
    <div className="nav petal">
        <ul className="petal-list">
            {petals.map(({ link, text, id }, index) => {
              const angle = 1.0*(index - activePetal) / petals.length;

              const transformation = {
                transform: `rotate(${angle}turn)`
              }

              return (
                <li className="petal-wrapper" id={id} key={index} style={transformation}>
                    <div className="petal-leaf">
                        <Link className="link" to={link} onClick={onClick(index)}>
                            { text }
                        </Link>
                    </div>
                </li>
              );
            })}
        </ul>
        <div id="pCenter" className="petal-center">
            {/* Logo Goes here! */}
        </div>
    </div>
  );
}
