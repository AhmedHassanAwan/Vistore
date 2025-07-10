


import React from 'react'
import Navbar from './components/layout/header/Navbar'
import HeroSection from './components/hero/Herosection'
import Brands from './components/brands/Brands'
import OrderAnalysis from './components/orderAnalysis/OrderAnalysis'
import RecentActivity from './components/recentActivity/RecentActivity'
import TestimonialSection from './components/testimonials/Testimonials'
import Orderfeatures from './components/orderFeatures/OrderFeatures'
import CRMSalesFAQs from './components/faq/faq'
import Footer from  './components/layout/footer/footer'
const page = () => {
  return (

      
 

       <main>
        <section  className="bg-gradient-to-b from-white via-pink-100 to-pink-200">

      <Navbar />
      <HeroSection />
        </section>
      <section className="bg-gradient-to-b from-[#f5f5f5] to-[#f3f4f6]">
  <Brands/>
  <OrderAnalysis/>
  <RecentActivity/>
  <TestimonialSection/>
  <Orderfeatures/>
  <CRMSalesFAQs/>
  <Footer/>
</section>




    </main>
  )
}

export default page