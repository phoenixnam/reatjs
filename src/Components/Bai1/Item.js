// import React from 'react'

// export default function Item(props) {
//   return (
// <div className='container d-flex justify-content-between align-items-center border-bottom py-3'>
//   <h6 className='mb-0'>{props.name}</h6>
//   <p className='mb-0'>{props.price}</p>  
// </div>

//   )
// }

import React from 'react';
import { getData } from './data';


export default function Item(props) {
  return (
    <div className='container d-flex justify-content-around align-items-center'>
      <h4>{props.name}</h4>
      <p>{props.price}</p>  
    </div>
  )
}
