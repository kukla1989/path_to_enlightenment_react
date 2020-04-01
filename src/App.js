import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import lampOn from './lamp_on.jpg';
import lampOff from './lamp_off.jpg';
import Footer from './Footer.js'






//<!-- <img onMouseOver={handleclick()} id="lamp" src="./src/lampOn.jpeg" alt = 'lamp on' width="20%" /> -->
//let wtf = ReactDOM.render(<handleclickd />, document.getElementById('root'));

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      lamp: lampOn
    }

    this.handleclick = this.handleclick.bind(this)
  }


  handleclick(event){
    this.state.lamp == lampOn ? this.setState({lamp:lampOff}) :  this.setState({lamp:lampOn})
}

  render(){
  return (
    <div>
        <img name="lampOn" id="1" src={this.state.lamp} some="true" />
        <br />
        <button  onClick={this.handleclick}> click here </button>
      

      <Footer/>
    </div>
  );
}
}

export default App;
































