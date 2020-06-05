import React from 'react'
import './App.css'
import Footer from './Footer.js'
import Contact from './Contact'
import Home from './Home'
import{BrowserRouter, Route, Switch, Link} from 'react-router-dom'

class App extends React.Component {

  render(){
    

  return (
    

      <BrowserRouter>

            <Link to="/contact">
        <h1> contact </h1>
      </Link>
      <Link to="/">
        <h1> home </h1>
      </Link>
      
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
































