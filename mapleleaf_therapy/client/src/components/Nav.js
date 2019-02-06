import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div className="z-depth-5">
      <Navbar className="orange darken-1" brand='Maple Leaf Theraputic' left>
        <NavItem title="Home"><Link to="/"><Icon>home</Icon></Link></NavItem>
        <NavItem title="Contact"><Link to="/newslist"><Icon>perm_phone_msg</Icon></Link></NavItem>
        <NavItem title="Appointments"><Link to="/newslist"><Icon>border_color</Icon></Link></NavItem>
        <NavItem title="Appointments"><Link to="/newslist"><Icon>face</Icon></Link></NavItem>
        <NavItem title="User Account"><Link to="/"><Icon>account_circle</Icon></Link></NavItem>      
      </Navbar>
    </div>
  );
};

export default Nav;