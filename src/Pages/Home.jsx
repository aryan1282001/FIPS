
import Main from '../components/Main'
import Photos from '../components/Photos'
import Body from '../components/Body'
import Instagram from '../components/Instagram'
import Form from '../components/Form'
import Footerimg from '../components/Footerimg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




function Home() {

  return (
    <div className="Home">
      <Navbar />
      
      <Main />
      <Photos />
      
      <Body />
      
      <Instagram />
      <Form />
      <Footerimg /> 
      <Footer />
    </div>
  )
}

export default Home
