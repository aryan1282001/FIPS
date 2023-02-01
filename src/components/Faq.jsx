import React from 'react'

const Faq = (props) => {

  return (
    

    <div className='faq'>
        <div className="faq-wrapper">
      
      <div className="ques">
      <h4>{props.sno}. {props.que}</h4>
      <h4>{props.ans}</h4>
      </div>
      </div>
    </div>
    
  )
}

export default Faq
