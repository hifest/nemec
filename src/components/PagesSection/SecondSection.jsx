import React from 'react';
import secondWave from "../../images/Group 22 - thqExclude.png"
import star from "../../images/Star 7.svg";
import circle1 from "../../images/circle (4).png"
import circle2 from "../../images/circle (5).png"
import circle3 from "../../images/circle (6).png"
import circle4 from "../../images/circle (7).png"
const SecondSection = () => {
    return (
        <div className="second_container">
            <div className="second_container_wave">
                <div className="container">
                    <div className="second_title">
                        <div className="second_subtext second_subtext_2">Ihr Erfolg ist <br/> unser Erfolg</div>
                        <div className="SecondPage_title second_title_2">Ihr Erfolg ist
                            <span className="SecondPage_title_span second_span_2">unser Erfolg</span>
                        </div>
                        <hr className="hr-ihre"/>
                    </div>
                    <div className="second_star df">
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>

                </div>
               <img src={secondWave} alt="" className="second_wave"/>
                <div className="second_wave_adaptive df dn">
                    <div>
                        <img src={circle2} alt="" className={"mb20"}/>
                        <img src={circle1} alt=""/>
                    </div>
                    <div>
                        <img src={circle4} alt="" className={"mb20"}/>
                        <img src={circle3} alt=""/></div>

                </div>
            </div>
        </div>
    );
};

export default SecondSection;
