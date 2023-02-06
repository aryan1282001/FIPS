import React from 'react'
import Body from '../components/Body'
import StoreGallery from '../components/StoreGallery'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Store = () => {
  return (
    <div>
      <Navbar />
      <div className='store-wrap-main'>
      <div className="store-wrap">
      <StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796029425.jpg'
      title='white chair'
      desc='19.95'
      id = '1'/>

<StoreGallery 
       image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796062458.jpg'
       title='Modern desk'
       desc='49.95'/>
       
       <StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796058676.jpg'
      title='Jade chair'
      desc='29.95'/>

<StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796029583.jpg'
      title='Loft commode'
      desc='39.95'/>

<StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796082475.jpg'
      title='old-fashioned'
      desc='179.95'/>

<StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796066765.jpg'
      title='Sofa comfort'
      desc='49.95'/>

<StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796070362.jpg'
      title='colored chairs'
      desc='44.95'/>

<StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796003421.jpg'
      title='Black classic chair'
      desc='19.95'/>

<StoreGallery 
      image='https://d2j6dbq0eux0bg.cloudfront.net/images/40728386/1796066689.jpg'
      title='Kitchen collection'
      desc='159.95'/>


    </div>
    </div>

    <Footer />
    </div>
  )
}

export default Store
