import React from 'react';
import Slider from "../slider";
import logoSlider from "../../images/image 2.png"
import Star from "../../images/Star 3.png"
import Text from "../Text";
import Divider from "../Divider";
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
                Seit 6 Monaten arbeiten wir mit DigitalRaum. Team von echten Profis. Kann nur weiterempfehlen
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
                Wenn Marketing Experten, - dann DigitalRaum. Eindeutig.
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
                Geile Zusammenarbeit! Einfach Danke!
            </div>
        </div>,

    ]

    const [param, setParam] = React.useState(2);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        const handleResize = () => {
            const newScreenWidth = window.innerWidth;
            setScreenWidth(newScreenWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        if (screenWidth <= 430) {
            setParam(1)
        }else if(screenWidth <= 650){
            setParam(2)
        }
        else if(screenWidth <= 966){
            setParam(3)
        }
        else if(screenWidth > 966){
            setParam(4)
        }
    }, [screenWidth]);

    return (
            <div className="container_client">
                <div className="container_for_text">
                    <Text title={"WAS UNSERE"} titleSecond={"KUNDEN BERICHTEN"} subtitle={"WAS UNSERE KUNDEN <br/> BERICHTEN"} addClasToContainer={"pt100 pb20"}/>
                    <Divider/>
                    <h4 className="client_h4">DARUM DIGITALRAUM</h4>
                </div>
                <Slider sliders={sliders} slidesToShow={param} IfContainer={false} sliderContainer={"client_container_slider"} adaptiveHeight={true}/>
            </div>
    );
};

export default SpeakClientComponent;
