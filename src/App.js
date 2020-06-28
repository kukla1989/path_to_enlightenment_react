import React from 'react'
import './App.css'
import Footer from './Footer.js'
import Contact from './Contact'
import Home from './Home'
import Menu from './Menu'
import{BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component {

  render(){
  return (    
      <BrowserRouter>
      <Menu />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Contact} path="/contact" />
        </Switch>
      <h1 id="forStickFooter"> </h1>
      <Footer />
      </BrowserRouter>
  );
}
}

export default App;
































