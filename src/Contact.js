import React from 'react';
import './App.css';




class Contact extends React.Component{
      constructor() {
            super()
            this.state = { 
                feedback: '',
                name: '',
                email: ''
            } 
         }


 handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  //this method send email
  handleSubmit = (event) => {
    let variables = {feedback: this.state.feedback, name: this.state.name, email: this.state.email}
    window.emailjs.send( 'gmail', 'neworder', variables).then(res => {
        console.log('Email successfully sent!')
    })
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }


      render(){
 

    return(	   
            <div className="row" >  
                <div>  
                    <h1>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                </div>    
            	<form id="contact-form" className="contact-form" action="#">
                	<p className="contact-name">
                		<input id="contact_name" type="text" placeholder="Ваше Имя" 
                         onChange={this.handleChange} name="name" />
                    </p>
                    <p className="contact-email">
                    	<input id="contact_email" type="text" placeholder="Ваш E-mail адрес для обратной связи" 
                        defaultValue={this.state.email} name="email" onChange={this.handleChange} />
                    </p>
                    <p className="contact-message">
                    	<textarea id="contact_message" placeholder="Ваше сообщение" name="feedback" rows="15" cols="40"
                        onChange={this.handleChange}></textarea>
                    </p>
                    <p className="contact-submit">
                    	<input type="button" value="Отправить" className="submit" onClick={this.handleSubmit} />                   
                    </p>                
                </form>
             
            
            
            
            	<div className="contact-details">       		
                    <ul>
                        <h3>Мои контакти</h3>
                        <h3>Admin@vega.ck.ua</h3>
                        <h3>(063) 560-1983  Виктор</h3>
                        <h3>Время работы с 10:00 - 19:00</h3>
                    </ul>
                </div>
        
             
        
        </div>
	    )	
        }	
}

export default Contact