import React from 'react';
import { Link } from 'react-router-dom';

const RightNav = ({ open }) => {
  return (
    <>
      <div className='p-3'>
        <Link to="/" className='text-decoration-none text-black m-2 m-sm-4'>Home</Link>
        <Link to="/Signup" className='text-decoration-none text-black m-2 m-sm-4'>Community support</Link>
        <Link to="/ImageClassifier" className='text-decoration-none text-black m-2 m-sm-4'>Image classify</Link>
        <Link to="/Notify" className='text-decoration-none text-black m-2 m-sm-4'>Disaster Alerts</Link>
        <Link to="/Safety" className='text-decoration-none text-black m-2 m-sm-4'>Safety tips</Link>
        <Link to="/Donation" className='text-decoration-none text-black m-2 m-sm-4'>Donate the needy</Link>
      </div>
    </>
  )
}

export default RightNav;




