import React from 'react'
import Form from '../components/Form'
import Customerimg from '../components/Customerimg'
import ShipReturn from '../components/ShipReturn'
import Faq from '../components/Faq'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CustomerCare = () => {
  return (
    <div>
      <Navbar />
      <Customerimg />
      <ShipReturn /> 
      <Faq
      sno="1"
      que="who we are?"
      ans="We are a team of four designers and two animators." />
      <Faq
      sno="2"
      que="what is our business plan?"
      ans="We are a team of four designers and two animators." />
      <Faq
      sno="2"
      que="who we are?"
      ans="We are a team of four designers and two animators." />
      <Faq
      sno="2"
      que="who we are?"
      ans="We are a team of four designers and two animators." />

      <Form />
      <Footer />
    </div>
  )
}

export default CustomerCare
