// import React from 'react'
import { Hero } from "../components/demo/Hero";
import { About } from "../components/demo/About";
import { HowItWorks } from "../components/demo/HowItWorks";
import { Features } from "../components/demo/Features";
// import { Cta } from "../components/demo/Cta";
// import { Services } from "../components/demo/Services";
import { Footer } from "../components/demo/Footer";
import { FAQ } from "../components/demo/FAQ";
import { Newsletter } from "../components/demo/Newsletter";
// import { Pricing } from "../components/demo/Pricing";
import { ScrollToTop } from "../components/demo/ScrollToTop";
// import { Team } from "../components/demo/Team";
import { Testimonials } from "../components/demo/Testimonials";
import "./demo.css";
// import { Sponsors } from "../components/demo/Sponsors";


const Demo = () => {
  return (
    <div className="">
       <>
       <Hero />
      {/* <Sponsors /> */}
      <About />
      <HowItWorks />
      <Features />
      {/* <Services /> */}
      {/* <Cta /> */}
      <Testimonials />
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
       </>
    </div>
  )
}

export default Demo
