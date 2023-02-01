import React from "react";

const ContactsMap = () => {
  return (
    <div className="outer">
      <div className="inner">
        <div className="leftMap">
          <h1>Our Store</h1>
          <p>3721 Single Street Quincy, MA 02169</p>
          <h5>Hours</h5>
          <p>Monday - Friday</p>
          <p>9am - 6pm</p>
          <h5>Contacts</h5>
          <p>123-456-7890<br/>info@email.com</p>
          
          <button>Feedback</button>
        </div>
        <div className="rightMap">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7265669440903!2d75.70065882635527!3d31.255991922150606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1674208270271!5m2!1sen!2sin"  allowfullscreen="true" loading="lazy" ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactsMap;
