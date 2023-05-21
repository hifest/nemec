import React from 'react';
import Slider from "../slider";
import logoSlider from "../../images/image 2.png"
import Star from "../../images/Star 3.png"
const SpeakClientComponent = () => {
    const sliders = [
        <div className="client_slide">
            <div className="client_slide_top">
                <div className="client_slide_title">
                    David Gtei
                </div>
                <img src={logoSlider} alt=""/>
            </div>
            <div className="client_slide_rate">
                <div className="client_slide_date">
                    05.09.2017
                </div>
                <div className="client_slide_star">
                    <div className="star df">
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>

                    </div>
                </div>
            </div>
            <div className="client_slide_descr">
                Super Service. Alles war toll und effektiv eingesetzt!
            </div>
        </div>,
        <div className="client_slide">
            <div className="client_slide_top">
                <div className="client_slide_title">
                    David Gtei
                </div>
                <img src={logoSlider} alt=""/>
            </div>
            <div className="client_slide_rate">
                <div className="client_slide_date">
                    05.09.2017
                </div>
                <div className="client_slide_star">
                    <div className="star df">
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>

                    </div>
                </div>
            </div>
            <div className="client_slide_descr">
                Super Service. Alles war toll und effektiv eingesetzt!
            </div>
        </div>,
        <div className="client_slide">
            <div className="client_slide_top">
                <div className="client_slide_title">
                    David Gtei
                </div>
                <img src={logoSlider} alt=""/>
            </div>
            <div className="client_slide_rate">
                <div className="client_slide_date">
                    05.09.2017
                </div>
                <div className="client_slide_star">
                    <div className="star df">
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>

                    </div>
                </div>
            </div>
            <div className="client_slide_descr">
                Super Service. Alles war toll und effektiv eingesetzt!
            </div>
        </div>,
        <div className="client_slide">
            <div className="client_slide_top">
                <div className="client_slide_title">
                    David Gtei
                </div>
                <img src={logoSlider} alt=""/>
            </div>
            <div className="client_slide_rate">
                <div className="client_slide_date">
                    05.09.2017
                </div>
                <div className="client_slide_star">
                    <div className="star df">
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>

                    </div>
                </div>
            </div>
            <div className="client_slide_descr">
                Super Service. Alles war toll und effektiv eingesetzt!
            </div>
        </div>,
        <div className="client_slide">
            <div className="client_slide_top">
                <div className="client_slide_title">
                    David Gtei
                </div>
                <img src={logoSlider} alt=""/>
            </div>
            <div className="client_slide_rate">
                <div className="client_slide_date">
                    05.09.2017
                </div>
                <div className="client_slide_star">
                    <div className="star df">
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>
                        <img src={Star} alt="" className="start_element"/>

                    </div>
                </div>
            </div>
            <div className="client_slide_descr">
                Super Service. Alles war toll und effektiv eingesetzt!
            </div>
        </div>,

    ]
    return (
            <div className="container_client">
                <h4>
                    DARUM DIGITALRAUM
                </h4>
                <Slider sliders={sliders}/>
            </div>
    );
};

export default SpeakClientComponent;
