
import React from "react";
import Slider from "react-slick";
import './Slider.css'

const Slide = () =>{
    const settings = {
        
        dots: false,
        // fade: true,
        lazyLoad: true, 
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        centerPadding: '50px',
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows:true,
        pauseOnHove:true,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: '150px',
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  centerPadding: '210px',
                } 
            },
            {
                breakpoint: 400,
                settings: {
                  fade:true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  centerPadding: '10px',
                } 
            }
        ]
      };
      return (
        <div className="container-fluid main_slider">
          <div className="main_slider_title">
            <h3>
              Mijozlarimiz
            </h3>
          </div>
          <Slider {...settings}>
            <div className="slick_slayd_img">
              <img src="img/logo1.png" alt="" />
            </div>
            <div className="slick_slayd_img">
              <img src="img/logo2.png" alt="" />
            </div>
            <div className="slick_slayd_img">
              <img src="img/logo3.png" alt="" />
            </div>
            <div className="slick_slayd_img">
              <img src="img/logo4.png" alt="" />
            </div>
            <div className="slick_slayd_img">
              <img src="img/logo5.png" alt="" />
            </div>
            
            
          </Slider>
        </div>
      );
    }
    export default Slide; 