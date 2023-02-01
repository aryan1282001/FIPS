import { useState } from "react";


const Form = () => {

const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState(""); 
const [text , setText] = useState("");

const handleSubmit = (e) => {
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
  
}

  return (
    <>
    <div>{text}</div>
    <form className="formclass">
      <div className="form1">
        <div className="form1-wrapper">
            <h1>Have a question?</h1>
            <p>Left your e-mail and we will contact you soon</p>
        </div>
      </div>
      <form className="form2">
        
          <div>
            <h4>First Name</h4>
            <input onChange={(e) => {
              setFname(e.target.value);
            }} placeholder="Your name" type="text" />
            <span>{fname}</span>
          </div>
          <div>
            <h4>Last Name</h4>
            <input onChange={(e) => {
              setLname(e.target.value);
            }} placeholder="Your last name" type="text" />
            <span>{lname}</span>
          </div>

          <div>
            <h4>Your email</h4>
            <input onChange={(e) => {
              setEmail(e.target.value);
            }} placeholder="example@email.com"type="text" />
            <span>{email}</span>
          </div>

          <div>
            <h4>Enter message</h4>
            <input onChange={(e) => {
              setMessage(e.target.value);
            }}  id="message" placeholder="Enter message"type="text" />
            <span>{message}</span>
          </div>

          <div className="formbtn">
            <button onClick={handleSubmit} >Contact me</button>
          </div>
        
      </form>
    </form>
    </>
  );
};

export default Form;
