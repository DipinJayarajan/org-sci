import React from 'react'
import Hero from "../../components/HomeComponents/Hero"
import AboutUs from '../../components/HomeComponents/AboutUs'
import OurReviews from "../../components/OurReviews"
import OurPartners from "../../components/OurPartners"
import FAQAccordian from '../../components/HomeComponents/FAQAccordian'

const Main = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurReviews />
      <FAQAccordian />
      <OurPartners />
    </div>
  )
}

export default Main