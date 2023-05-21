import React from 'react';
import Carousel from "nuka-carousel"
import firstSlide from "../images/firstslide.png"
import secondSlide from "../images/secondslide.png"
import thirdSlide from "../images/treriyslide.png"
import fourthSlide from "../images/choturuslide.png"

const Slider = () => {

    return (
        <div className="container">
            <div className="slider_container"><Carousel cellAlign={"left"} slidesToShow={3} wrapAround={true} cellSpacing={40} autoplay={true} autoplayInterval={5000} speed={1000}>
                <img src={firstSlide} />
                <img src={secondSlide} />
                <img src={thirdSlide} />
                <img src={fourthSlide} />
            </Carousel>
            </div>

        </div>
    );
};

export default Slider;
