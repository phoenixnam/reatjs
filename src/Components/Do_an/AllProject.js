import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './AllProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faGear,
  faCircleUser,
  faAngleDown,
  faEllipsis
} from '@fortawesome/free-solid-svg-icons';

function AllProject() {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  return (
    <>
    <div className="header d-flex align-items-center">
      <div className='logo'>FIB</div>
      <div className='drp'> 
      <div className="dropdown">
        <span
          className="drop-down"
          type="text"
          onClick={toggleDropdown1}
          aria-expanded={isDropdownOpen1}
        >
          Projects <FontAwesomeIcon icon={faAngleDown} />
        </span>
        {isDropdownOpen1 && (
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <a className="dropdown-item" href="#">Link 1</a>
            <a className="dropdown-item" href="#">Link 2</a>
            <a className="dropdown-item" href="#">Link 3</a>
          </div>
        )}
      </div>
      <div className="dropdown1">
        <span
          className="drop-down"
          type="text"
          onClick={toggleDropdown2}
          aria-expanded={isDropdownOpen2}
        >
          Projects <FontAwesomeIcon icon={faAngleDown} />
        </span>
        {isDropdownOpen2 && (
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <a className="dropdown-item" href="#">Link 1</a>
            <a className="dropdown-item" href="#">Link 2</a>
            <a className="dropdown-item" href="#">Link 3</a>
          </div>
        )}
      </div>
      </div>
      <button className="btn btn-primary">Create</button>
      <span className='icon'>
        <FontAwesomeIcon className="icon1" icon={faCircleUser} />
      </span>
      <span>
        <FontAwesomeIcon className='icon2' icon={faGear} />
      </span>
    </div>
    
    <div className="container">
      <div className="project">
        <span>Projects</span>
        <span id="crt">
          <button className="create-button">Create Project</button>
        </span>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>
              <FontAwesomeIcon icon={faEllipsis} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span className="pagination-number">1</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
    </>
  );
}

export default AllProject;
