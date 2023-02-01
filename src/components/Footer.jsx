import React from 'react'

const Footer = () => {
  return (
    <div className="foot">
      <div className="foot1">
        <div className="foot1-wrapper">
          <h3>Address</h3>
          <h5>3721 Single Street <br/>Quincy, MA 02169</h5>
        </div>
      </div>
      <div className="foot2">
        <div className='foot2-wrapper'>
        <h3>Contacts</h3>
        <h5>123-456-7890<br/>info@fips.com</h5>
        </div>
      </div>
      <div className="foot3">
      <div className='foot3-wrapper'>
        <div>
        <h3>Subscribe to our newsletter</h3>
        </div>
        
        <div className="footform">
            <div>
            <h5>Email address</h5>
            <input type="text" placeholder='Your email address' />
            </div>
            <div>
            <button>Submit</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
