import React from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import mail_icon from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send a message <img src ={message} alt='' /></h3>
        <p>Feel free to reach out though contact from or find our contact information below. Your feedback is important to us! and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
          <li> <img src={phone} alt='' /> +91-8547620836</li>
          <li><img src={mail_icon} alt='' /> shubhamkumar@gmail.com</li>
          <li><img src={location} alt='' /> Bangalore, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <h3>Contact Form</h3>
           
           <form>
            <label> Your name</label>
            <input type="text" placeholder='Enter your name' required />
            <label>Your phone</label>
            <input type="nuber" placeholder='Enter your phone number' required />
            
            <label>Message</label>
            <textarea placeholder='Message' name='message' rows= "6" required></textarea>

            <button type="submit" className='btn dark-btn'>Send Message</button>
           </form>
          <span></span>
      </div>
    </div>
  )
}

export default Contact
