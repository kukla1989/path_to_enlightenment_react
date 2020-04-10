import React from "react"
import "./App.css"


function Contact(){

	return(
		<div>
		       
    <div className="row">
    	<div >
        
        	<form id="contact-form" className="contact-form" action="#">
            	<p className="contact-name">
            		<input id="contact_name" type="text" placeholder="Ваше Имя" value="" name="name" />
                </p>
                <p className="contact-email">
                	<input id="contact_email" type="text" placeholder="Ваш E-mail адрес для обратной связи" value="" name="email" />
                </p>
                <p className="contact-message">
                	<textarea id="contact_message" placeholder="Ваше сообщение" name="message" rows="15" cols="40"></textarea>
                </p>
                <p className="contact-submit">
                	<a id="contact-submit" className="submit" href="test_page.html">Отправить сообщение</a>
                </p>
                
                <div id="response">
                
                </div>
            </form>
         
        </div>
        
        <div >
        	<div className="contact-details">
        		<h3>Мои контакти</h3>
                <ul>
                    <h3><a>Admin@vega.ck.ua</a></h3>
                    <h3>(063) 560-1983  Виктор</h3>
                    <h3>
                        Время работы с 10:00 - 19:00
                    </h3>
                </ul>
            </div>
        </div>
    </div>

		</div>
	)		
}

export default Contact