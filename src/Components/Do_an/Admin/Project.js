import React, { useState } from 'react';
import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';

const Project = () => {
  const [Projects, setProjects] = useState([
    { id: 1, Projectname: 'Project1', email: 'Project1@example.com', project: 'Project A', username: 'Anh' },
    { id: 2, Projectname: 'Project2', email: 'Project2@example.com', project: 'Project B', username: 'Anh'  },
    { id: 3, Projectname: 'Project3', email: 'Project3@example.com', project: 'Project C', username: 'Anh'  }
  ]);

  const handleDeleteProject = (id) => {
    setProjects(Projects.filter(Project => Project.id !== id));
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-sm-1">
          <Header />
        </div>
        <div className="col-sm-11">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Project manager</th>
                <th>Test</th>
                <th>Dev</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Projects.map(Project => (
                <tr key={Project.id}>
                  <th scope="row">{Project.id}</th>
                  <td>{Project.Projectname}</td>
                  <td>{Project.email}</td>
                  <td>{Project.username}</td>
                  <td>{Project.username}</td>
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

export default Project;
