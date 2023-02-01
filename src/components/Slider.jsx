import React from 'react'

const Slider = () => {
    let box = document.querySelector('.Slider-img');


    const prevbtn =() =>{
      let width=box.clientWidth;

      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
    }

    const nextbtn = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    }
  return (
    
    <div className='Slider-main'>
        
      <div className="Slider-img">
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/minh-pham-yapzt8wxmo4-unsplash-mnlkP3y33KtgEO1D.jpeg" alt="" />
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/minh-pham-yapzt8wxmo4-unsplash-mnlkP3y33KtgEO1D.jpeg" alt="" />
      <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/minh-pham-yapzt8wxmo4-unsplash-mnlkP3y33KtgEO1D.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/minh-pham-yapzt8wxmo4-unsplash-mnlkP3y33KtgEO1D.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/inside-weather-uxqlfigh6oe-unsplash-m7Vjepgp8nHLVO7b.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/inside-weather-uxqlfigh6oe-unsplash-m7Vjepgp8nHLVO7b.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/inside-weather-uxqlfigh6oe-unsplash-m7Vjepgp8nHLVO7b.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/inside-weather-uxqlfigh6oe-unsplash-m7Vjepgp8nHLVO7b.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
         <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
         <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
         <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
         <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />
         <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=242,h=242,fit=crop/fipsziy7a/denys-striyeshyn-wj7ygwz2-00-unsplash-AQE92JvVD5hLgw3L.jpeg" alt="" />

      </div>
      <button onClick={prevbtn} className='pre-btn'><p>&lt;</p></button>
        <button onClick={nextbtn} className='next-btn'><p>&gt;</p></button>
    </div>
  )
}

export default Slider
