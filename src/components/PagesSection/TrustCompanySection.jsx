import React from 'react';
import Slider from "../slider";
import Button from "../Button";

const TrustCompanySection = () => {
    return (
        <div><div className="container">
            <div className="second_title">
                <div className="second_subtext">UNTERNEHMEN, DIE UNS VERTRAUEN</div>
                <div className="SecondPage_title">UNTERNEHMEN, DIE UNS VERTRAUEN</div>
                <hr className="hr-ihre"/>
            </div>
            <p className="trust_p">
                Als zuverlässige Marketing-Agentur werden wir von namhaften <br/> Unternehmen geschätzt.
            </p>
            <Slider/>
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
