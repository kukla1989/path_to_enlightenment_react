import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Menu from './Menu.js'
import Footer from './Footer.js'
import Logo from './logo.png';
import{BrowserRouter, Route, Switch, Link} from 'react-router-dom';


function Home(){
    
      let links = [
        { label: 'головна', link: '#home', active: true },
        { label: 'галерея', link: 'http://google.com'  },
        { label: 'о нас', link: "dsfg" },
        { label: 'Contact Us', link: '#contact-us' }
      ]  


	return(
		<div>

       <div className="container center">
        <Menu links={links} logo={Logo} />
      </div> 

      <h1>home page </h1>
    </div>
    )

}

export default Home

