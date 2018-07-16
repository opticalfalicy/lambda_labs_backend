import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Nav, NavItem, NavLink, Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

render(){
        return (
            <div>
            <Nav vertical>
            <NavItem>
                <NavLink href="#" active>Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
            </Nav>
        </div>

        )
    }
}

// export default NavBar;