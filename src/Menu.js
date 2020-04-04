import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (

                <a className="menu__link menu__link--active" href={link.link}> {link.label}</a>
                
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
                
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });


        return (
            <nav className="menu">
                {console.log("logo")}
                {console.log('url(' + this.props.logo + ')')}
                <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className="menu__logo"></h1> 

                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>


                </div>
            </nav>
        );
    }
}

export default Menu;
