import React, { useState } from 'react';
import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

const Test = () => {
  const [Projects, setProjects] = useState([
    { id: 1, Projectname: 'Project1', email: 'Project1@example.com', project: 'Project A' },
    { id: 2, Projectname: 'Project2', email: 'Project2@example.com', project: 'Project B' },
    { id: 3, Projectname: 'Project3', email: 'Project3@example.com', project: 'Project C' }
  ]);

  const handleDeleteProject = (id) => {
    setProjects(Projects.filter(Project => Project.id !== id));
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-sm-1">
          <div className="MuiPaper-root MuiPaper-elevation">
            <div className="MuiBox-root css-1b98hg2">
              <a className="MuiBox-root css-cz6ae8" href="/">
                <img className="MuiBox-root css-7txj2x" src="http://hinhdep.com.vn/wp-content/uploads/2012/10/T-va-A.jpg" alt="Brand" />
                
              </a>
            </div>
            <div className="MuiList-root MuiList-padding css-n4phvm-MuiList-root">
              <a className="" href="/dashboard">
                <ol className="MuiListItem-root MuiListItem-padding css-1l9osrx-MuiListItem-root">
                  <div className="MuiBox-root">
                    <div className="MuiListItemIcon-root">
                      <span className="material-icons-round">User</span>
                    </div>
                  </div>
                </ol>
              </a>
              <a className="active" href="/tables" aria-current="page">
                <ol className="MuiListItem-root">
                  <div className="MuiBox-root">
                    <div className="MuiListItemIcon-root">
                      <span className="material-icons-round">Project</span>
                    </div>
                  </div>
                </ol>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-11">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Project manager</th>
                <th>\Test</th>
                <th>\Dev</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Projects.map(Project => (
                <tr key={Project.id}>
                  <th scope="row">{Project.id}</th>
                  <td>{Project.Projectname}</td>
                  <td>{Project.email}</td>
                  <td>{Project.project}</td>
                  <td>{Project.email}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="btn btn-primary btn-sm" title="Add">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className="btn btn-danger btn-sm" title="Delete" onClick={() => handleDeleteProject(Project.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;
