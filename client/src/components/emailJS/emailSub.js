import React, {Component} from 'react';
import emailjs from 'emailjs-com';


class Emailjs extends Component{
    
   emailSubscriptions(e) {
      e.preventDefault();
      emailjs.sendForm('service_4nrugr9', 'template_8uohlq7',   e.target, 'user_qKiqJrYcHmzVeYCzW7jev')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
  
render() {
  return (
   <form className="contact-form" 
         onSubmit={this.emailSubscriptions}>
      <label> Email </label>
      <input type="email" name="email" placeholder="Enter your email here..." />
      <input type="submit" value="Send" />
    </form>
   )
 }
}
export default Emailjs