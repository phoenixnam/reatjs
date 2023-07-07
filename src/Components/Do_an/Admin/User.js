import React, { useState } from 'react';
import './user.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faPen, faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';

const User = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com', project: 'Project A' },
    { id: 2, username: 'user2', email: 'user2@example.com', project: 'Project B' },
    { id: 3, username: 'user3', email: 'user3@example.com', project: 'Project C' }
  ]);

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">

      <div className="row">
        <div className="col-sm-1">
        <Header></Header>
        </div>
        <div className="col-sm-11">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Project</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.project}</td>
                  <td>
                    <button className="btn btn-warning btn-sm" title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button className="btn btn-primary btn-sm" title="Add">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button className="btn btn-danger btn-sm" title="Delete" onClick={() => handleDeleteUser(user.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
          <FontAwesomeIcon icon={faAngleLeft} />
          <span className="pagination-number">1</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default User;
