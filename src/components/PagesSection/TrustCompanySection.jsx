import React from 'react';
import Slider from "../slider";
import Button from "../Button";
import firstSlide from "../../images/firstslide.png"
import secondSlide from "../../images/secondslide.png"
import thirdSlide from "../../images/treriyslide.png"
import fourthSlide from "../../images/choturuslide.png"
import Text from "../Text";
import Divider from "../Divider";
const TrustCompanySection = () => {
    const sliders = [firstSlide,secondSlide,thirdSlide,fourthSlide]
    return (
        <div className="trust_container">
            <Text title={"UNTERNEHMEN, DIE UNS VERTRAUEN"} subtitle={"UNTERNEHMEN, DIE UNS <br/> VERTRAUEN"} addClasToContainer={"p100 dn430"}/>
            <Divider addClass={"dn430"}/>
            <div className="container">
            <p className="trust_p dn430 ">
                Als zuverlässige Marketing-Agentur werden wir von namhaften <br/> Unternehmen geschätzt.
            </p>

            <Slider sliders={sliders} slidesToShow={3} sliderContainer={"slider_container"} IfContainer={true}/>
            <p className="trust_secp">Falls Ihre bestehende Website nicht die erhofften Ergebnisse liefert oder Ihnen nicht mehr <br/> gefällt, helfen wir Ihnen gerne dabei, Ihre Website zu optimieren und zu modernisieren.</p>
            <h3 className="trust_h3">Wir kümmern uns darum!</h3>
            <div className="trust_containerButton">
                <Button text={"JETZT ANRUFEN"} variant={"button-1"}/>
                <Button text={"anfrage senden"} variant={"button-3 btn"}/>

            </div>
        </div></div>

    );
};

export default TrustCompanySection;
