import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Menu from './Menu.js'
import Footer from './Footer.js'
import Logo from './logo.png';

class App extends React.Component {

  render(){
      let links = [
        { label: 'Home', link: '#home', active: true },
        { label: 'About', link: '#about' },
        { label: 'Portfolio', link: '#portfolio' },
        { label: 'Contact Us', link: '#contact-us' }
    ] 

  return (
    <div className="content">
        
      <div className="container center">
        <Menu links={links} logo={Logo} />
      </div> 
      <h1 id="forStickFooter"> </h1>
      <br /><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}
}

export default App;
































