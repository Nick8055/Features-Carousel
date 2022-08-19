import './App.css';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {

  const NextArrow = ({onClick}) => {
    return(
      <div className='arrow nextArrow' onClick={onClick}>
        {'>'}
        {/* <FaArrowRight/> */}
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return(
      <div className='arrow prevArrow' onClick={onClick}>
        {'<'}
        {/* <FaArrowLeft/> */}
      </div>
    )
  }

  const Feature = ({Heading, Desc}) =>{
    return(
      <div className='FeatureContainer'>
        <h1 className="FeatureHeading">{Heading}</h1>
        <h1 className='FeatureDesc'>{Desc}</h1>
      </div>
    )
  }

  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className='App'>
      <h1 className='Title'>Features and Services</h1>
      <h1 className='Subtitle'>Stretch your time | Plan your Day | Join the Green Side</h1>

      <Slider className='Slider' {...settings}>

        <Feature
        Heading={'Plan your day anywhere, anytime.'}
        Desc={'Managing your clinic remotely has never been easier. Our cloud based system will give you the flexibility to manage your organization and take informed decisions on the move. Sit back, sip your coffee while you run your office.'}
        />

        <Feature 
        Heading={'Sleep on our Couch and be lazy for the rest of your life'}
        Desc={'Why bother working? Try out our latest couches with electronic adjustment for lumbar support, thigh support, and hot-stone massage functionality with spot heaters. Also features stuff like heated seats, ventilated seats, etc.'}
        />

        <Feature 
        Heading={'Stay Safe with Our best-in-class Burglar Exterminator'}
        Desc={'Features a 500 Magnum Shot gun aimed right at the door entrance from inside, and fires automatically at the burglar when they intrude.'}
        />

      </Slider>
    </div>

  );
}
