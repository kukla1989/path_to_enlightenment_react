import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Menu from './Menu.js'
import Footer from './Footer.js'
import Logo from './logo.png';
import Contact from './Contact'

class App extends React.Component {

  render(){
      let links = [
        { label: 'головна', link: '#home', active: true },
        { label: 'галерея', link: 'http://google.com'  },
        { label: 'о нас', link: Contact },
        { label: 'Contact Us', link: '#contact-us' }
    ] 

  return (
    <div className="content">
        
      <div className="container center">
        <Menu links={links} logo={Logo} />
      </div> 
      <Contact/>
      <h1 id="forStickFooter"> </h1>
      <Footer />
    </div>
  );
}
}

export default App;
































