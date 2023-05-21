import React from 'react';
import Slider from "../slider";
import Button from "../Button";
import firstSlide from "../../images/firstslide.png"
import secondSlide from "../../images/secondslide.png"
import thirdSlide from "../../images/treriyslide.png"
import fourthSlide from "../../images/choturuslide.png"
const TrustCompanySection = () => {
    const sliders = [firstSlide,secondSlide,thirdSlide,fourthSlide]
    return (
        <div className="trust_container">
            <div className="container">
            <div className="second_title dn">
                <div className="second_subtext dn">UNTERNEHMEN, DIE UNS VERTRAUEN</div>
                <div className="SecondPage_title dn">UNTERNEHMEN, DIE UNS VERTRAUEN</div>
                <hr className="hr-ihre dn"/>
            </div>
            <p className="trust_p dn">
                Als zuverlässige Marketing-Agentur werden wir von namhaften <br/> Unternehmen geschätzt.
            </p>
            <Slider sliders={sliders}/>
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
