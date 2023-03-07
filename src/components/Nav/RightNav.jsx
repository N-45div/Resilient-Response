import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const RightNav = ({ open }) => {
  return (
    <>
      <div className='p-3'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item><Link to="/" className='text-decoration-none text-black'>Home</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/community" className='text-decoration-none text-black'>Community support</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/ImageClassifier" className='text-decoration-none text-black'>Image classify</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/Notify" className='text-decoration-none text-black'>Disaster Alerts</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/Safety" className='text-decoration-none text-black'>Safety tips</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/MarkerMap" className='text-decoration-none text-black'>Emergency shelters</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/Donation" className='text-decoration-none text-black'>Donate the needy</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default RightNav;
