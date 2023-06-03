import React from 'react'

export default function ShowUser(props) {
  const { listUser } = props;
  return (
    <div>
      {listUser.map((user,index) => {
        return (
          <React.Fragment key={user.id}>
            <ul>
              <li><img src={user.avatar} alt="User Avatar" /></li>
              <li>{user.name}</li>
              <li>{user.email}</li>
            </ul>
          </React.Fragment>
        )
      })}
    </div>
  )
}