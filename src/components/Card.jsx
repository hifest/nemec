import React from "react";
import Button from "./Button";
import logo from "../images/design1.png"
import logo1 from "../images/Untitle1.png"
import logo2 from "../images/Microneedlin1.png"



export const Card = () => {
    return (
        <>
            <div className="second_title">
                <div className="second_subtext">Ihre Bedürfnisse  <br/> unsere Leistungen</div>
                <div className="SecondPage_title">Ihre Bedürfnisse
                    <span className="SecondPage_title_span"> unsere Leistungen</span>
                </div>
                <hr className="hr-ihre"/>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="card_boxs">
                        <div className="card_box">
                            <div className="card_title">INSTAGRAM & TIKTOK</div>
                            <hr className="card_hr"/>
                            <div className="card_description">Videos gewinnen Ihnen Kunden, weil:</div>
                            <ul className="card_ul">
                                <li className="card_li"><span className="card_span">Storytelling und Markenbildung:</span>Videos schaffen Verbindungen zu Kunden, indem sie Markenpersönlichkeiten präsentieren.</li>
                                <li className="card_li"><span className="card_span">Interaktion und Engagement:</span>Firmen können durch Kommentare, Likes und Shares ihre Zielgruppe ansprechen.</li>
                                <li className="card_li"><span className="card_span">Virales Potenzial:</span> Instagram und TikTok sind die Virale Plattformen für weitreichende Videos.</li>
                            </ul>
                            <div className="card_text">Ein <span className="card_span">eindrucksvolles Bild Ihres Unternehmens</span> in nun 60 Sekunden.</div>
                            <Button text="JETZT ANFRAGE STELLEN" variant={"button-2 card_btn pa z100"}/>
                        </div>
                        <div className="card_box box2"/>
                    </div>
                    <div className="card_img">
                        <img className="card_logo" src={logo} alt=""/>
                    </div>
                </div>
                <div className="card card_2">
                    <div className="card_img2">
                        <img className="card_logo2" src={logo1} alt=""/>
                    </div>
                    <div className="card_boxs">
                        <div className="card_box card_box2">
                            <div className="card_title">performance marketing</div>
                            <hr className="card_hr"/>
                            <div className="card_description">Sie suchen nach:</div>
                            <ul className="card_ul">
                                <li className="card_li"><span className="card_span">Gewinnung neuer Kunden</span> durch Facebook Ads, Instagram Ads, TikTok Ads und Google Ads</li>
                                <li className="card_li">Wachstum Ihres Unternehmes in Zusammenhang mit der<span className="card_span">Umsatzsteigerung</span></li>
                                <li className="card_li">Pflege Ihrer Instagram-Seite</li>
                            </ul>
                            <div className="card_text">Lassen Sie uns Ihnen helfen, das <span className="card_span">Wachstum Ihres Unternehmens</span> zu ermöglichen! in nun 60 Sekunden.</div>
                            <Button text="JETZT ANFRAGE STELLEN" variant={"button-2 pa z100"}/>
                        </div>
                        <div className="card_box card_box2 box2 box3"/>
                    </div>

                </div>
                <div className="card">
                    <div className="card_boxs">
                        <div className="card_box ">
                            <div className="card_title">WEBSeITEN & ONLINE-SHOPS</div>
                            <hr className="card_hr"/>
                            <div className="card_description">Videos gewinnen Ihnen Kunden, weil:</div>
                            <ul className="card_ul">
                                <li className="card_li">Ihre Webseite oder Ihr Webshop soll:</li>
                                <li className="card_li">Kundenreferenzen und Erfolgsgeschichten nutzen, um<span className="card_span">Glaubwürdigkeit zu stärken.</span></li>
                                <li className="card_li">Klare Handlungsaufforderung einbinden, um Kunden zum<span className="card_span"> Kauf zu ermutigen.</span></li>
                            </ul>
                            <div className="card_text">Klare Handlungsaufforderung einbinden, um Kunden zum <span className="card_span">Kauf zu ermutigen.</span></div>
                            <Button text="JETZT ANFRAGE STELLEN" variant={"button-2 pa z100"}/>
                        </div>
                        <div className="card_box box2"/>
                    </div>
                    <div>
                        <img className="card_logo3" src={logo2} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

