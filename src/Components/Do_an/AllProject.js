import React from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 import './AllProject.css';
import Dropdown from './Dropdown';
 import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,faAngleLeft, faGear,faCircleUser, faAngleDown
} from '@fortawesome/free-solid-svg-icons';

function AllProject() {
  return (
    <>
      <div className="header d-flex align-items-center">
      <div className="dropdown mr-2">
          <span type="" id="dropdownMenuButton1">
            Projects <FontAwesomeIcon icon={faAngleDown} />
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Link 1</a></li>
            <li><a className="dropdown-item" href="#">Link 2</a></li>
            <li><a className="dropdown-item" href="#">Link 3</a></li>
          </ul>
        </div> 
        <div className="dropdown mr-2">
          <span type="" id="dropdownMenuButton1">
            Projects <FontAwesomeIcon icon={faAngleDown} />
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Link 1</a></li>
            <li><a className="dropdown-item" href="#">Link 2</a></li>
            <li><a className="dropdown-item" href="#">Link 3</a></li>
          </ul>
        </div> 
        <span>
          <button className="btn btn-primary">Create</button>
        </span>
        <span className='icon'>
        <FontAwesomeIcon className="icon1" icon={faCircleUser} />
      
        
        </span>
        <span  >
          <FontAwesomeIcon className='icon2' icon={faGear} /></span>
      </div>
      <hr />

      <div className="container">
        <div className="project">
          <span>Projects</span>
          <span id="crt"> <button className="create-button">Create Project</button></span>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path className="dot-path" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
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
