import React, { Component } from 'react';
import logo from './logo.png'
import  './Menu.css'

class Menu extends Component {

    render() {       
        return (
            <ul className='nav'>
                <img  src={logo} alt='logo' />
                <li><a  href='/'> Home </a></li>                 
                <li><a  href='/contact'> Contact </a></li> 
            </ul>
            )
    }
}

export default Menu;    