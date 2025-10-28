"use client"
import BannerSix from "@/components/banner/BannerSix"
import HeaderFour from "@/components/header/HeaderFour"
import AboutOne from "@/components/about/AboutOne"
import ServiceOne from "@/components/service/ServiceOne"
import WorkingProcess from "@/components/workingprocess/ProcessOne"
import CounterOne from "@/components/counterup/CounterOne"
import BrandTwo from "@/components/brand/BrandTwo"
import LargeVideo from "@/components/video/LargeVideo"
import TestimonialsFour from "@/components/testimonials/TestimonialsFour"
import Blog from "@/components/blog/Blog"
import FooterTwo from "@/components/footer/FooterTwo"
import BackToTop from "@/components/footer/BackToTop"
import { useEffect } from 'react';
import AOS from 'aos';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,  // Whether animation should happen only once
      offset: 20,
    });
  }, []);
  return (
    <div className="index-one">
        <HeaderFour/>
        <BannerSix/>        
        <AboutOne/>
        <ServiceOne/>
        <WorkingProcess/>        
        <LargeVideo/>
        <CounterOne/>                
        <TestimonialsFour/>
        <BrandTwo/>        
        <Blog/>
        <FooterTwo/>
        <BackToTop/>
    </div>
  )
}

export default HomePage