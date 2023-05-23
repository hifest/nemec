import React from 'react';
import secondWave from "../../images/Group 22 - thqExclude.png"
import circle1 from "../../images/circle (4).png"
import circle2 from "../../images/circle (5).png"
import circle3 from "../../images/circle (6).png"
import circle4 from "../../images/circle (7).png"
import Text from "../Text";
import Divider from "../Divider";
import StarComponent from "../Star";
const SecondSection = () => {
    return (
        <div className="second_container">
            <div className="second_container_wave">
                <div className="container">
                    <Text title={"Ihr Erfolg ist"} subtitle={"Ihr Erfolg ist <br/> unser Erfolg"} addClasToContainer={"pb120"} titleSecond={" unser Erfolg"}/>
                    <div>
                    <Divider/>
                    <StarComponent/>
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
