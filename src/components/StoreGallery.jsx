import React, {useState} from 'react'


const StoreGallery = (props) => {

  const [buyid , setBuyid]= useState()

  const buyClick = (e) => {
    e.preventDefault()
    setBuyid(props.id)
    console.log(buyid)
  }
  return (
    <div className='storecard '>
      <div className="storeimg">
        <img src={props.image} alt="" />
        <div className="buy-now">
          <button onClick={buyClick}>Buy now</button>
        </div>
        
      </div>
      <div className="storedesc">
        <h3>Sample.{props.title}</h3>
        <h5>${props.desc}</h5>
      </div>
    </div>
  )
}

export default StoreGallery
