import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
     <div className='container footer-contain'>
       <div>
       <h2>Quick Links</h2>
      <ul className='list-1'>
         <li>About us </li>        
         <li> FAQ</li>      
         <li>Help </li>
         <li>My Account </li>
         <li>Create Account </li>
         <li>Contacts </li>
         </ul>
         </div>
         <div>
         <h2>Categories</h2>
      <ul className='list-1'>
         <li>Shop </li>        
         <li> Hotels</li>      
         <li>Restaurent</li>
         <li>Stationary</li>
         <li>Events</li>
         <li>View all</li>
         </ul>
         </div>
         <div>
           <h2>Contacts </h2>
         <ul className='list-1'>
         <li>
           <img src="./../../assets/address.png" className='address-logo' alt="adress logo" />
           Dummy address ,567 <br /> New Delhi ,India </li>        
        <br />
         <li>
         <img src="./../../assets/telephone.png" className='address-logo' alt="adress logo" /> +917267383834</li>      
         <li> <br />
         <img src="./../../assets/email.png" className='address-logo' alt="adress logo" />info@domain.com</li>
         </ul>
         </div>
         <div>
       <h2>Keep intouch</h2>
       <input type="email" name="email" id="sk" placeholder="Your Email" className="input-mail"/>
       <button type="button" className='butt-submit'>Submit</button><br /><br />
       <h2>Follow Us </h2>
       <img src="./../../assets/facebook.png" className='address-logo logos' alt="adress logo" />
       <img src="./../../assets/twitter.png" className='address-logo logos' alt="adress logo" />
       <img src="./../../assets/pinterest.png" className='address-logo logos' alt="adress logo" />
       <img src="./../../assets/instagram.png" className='address-logo logos' alt="adress logo" />
         </div>
        

     </div>
     <hr />
        <div className='paragraph text-center'>
          <div>
          <p  className ="para">Unravel for Businesses   Terms & Condition | Privacy | 2022 | Unravel </p>
          </div>
        </div>
    </>
  )
}

export default Footer