import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = ['A', ' 2', ' 3'];

  return (
    <div className="dropdown mr-2">
      <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded={isOpen} onClick={toggleDropdown}>
        Projects
      </button>
      {isOpen && (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
