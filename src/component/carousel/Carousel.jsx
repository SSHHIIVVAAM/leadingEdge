import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import image1 from "../assets/sakshi.png";
import image2 from "../assets/hari.png";
import image3 from "../assets/nidhi.png";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="testimonial-carousel">
      <h3 className="sizz">Let’s Work Together To Grow Your Business</h3>
      <h5>
        Our experts are dedicated to help you succeed.Talk to an expert and get
        your questions answered in a Free 30 minutes Call.
      </h5>
      <Slider {...settings}>
        <div className="testimonial-slide">
          <img src={image1} alt="Testimonial 1" className="testimonial-image" />
          <div>
            <h3>Digital Marketing</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pretium pretium tempor."
            </p>
          </div>
        </div>
        <div className="testimonial-slide">
          <img src={image2} alt="Testimonial 2" className="testimonial-image" />
          <div>
            <h3>Web Development</h3>
            <p>
              "Fusce id felis arcu. Vivamus auctor sed quam sed varius. Mauris
              suscipit ante nec ex"
            </p>
          </div>
        </div>

        <div className="testimonial-slide">
          <img src={image3} alt="Testimonial 2" className="testimonial-image" />
          <div>
            <h3>Social Media Marketing</h3>
            <p>
              "Fusce id felis arcu. Vivamus auctor sed quam sed varius. Mauris
              suscipit ante nec ex"
            </p>
          </div>
        </div>
        {/* Add more testimonial items as needed */}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
