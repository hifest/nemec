import React from 'react';
import Carousel from "nuka-carousel"

const Slider = ({sliders}) => {
    let array;
    if(sliders[0] === "/static/media/firstslide.c5d36e345eae5c5dd217.png"){
         array = sliders.map((slide, index) => (
            <img src={slide} key={index} />
        ))
    }else{
        array = sliders.map((slide, index) => (
            <div>{slide}</div>
        ))
    }
    return (
        <div className="container">
            <div className="slider_container">
                <Carousel cellAlign={"left"} slidesToShow={3} wrapAround={true} cellSpacing={40} autoplay={true} autoplayInterval={5000} speed={1000}>
                    {array}
            </Carousel>
            </div>

        </div>
    );
};

export default Slider;
