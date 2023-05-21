import React from 'react';
import logo from '../../images/logo.png';
import Button from "../Button";
import Scene from "../../images/solScene.png";
import Waves from "../../images/Group 115 (2).png"
const SolutionCompany = () => {
    const [active, setActive] = React.useState(false);

    return (
        <>
        <div className="solution_background">
            <div className="container">
                <ul className={active ? "menu_active menu" : "menu"}>
                    <li className="menu_item"><a href="#" className="menu_link">Leistungen</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">referenzen</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">Impressum</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">AGB</a></li>
                    <li className="menu_item"><a href="#" className="menu_link">Datenschutzerklärung</a></li>
                    <Button text={"KONTAKT"} variant={"button-1"}/>
                </ul>
                <div className="solution_container">
                    <div className="header">
                        <div className="solution_logo">
                            <a href="#">
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <nav>
                            <ul className="header_ul">
                                <div className="dfac">
                                    <>
                                        <a href="#"><li className="header_li">LEISTUNGEN</li></a>
                                        <a href="#"><li className="header_li">referenzen</li></a>
                                        <a href="#"><li className="header_li">Impressum</li></a>
                                    </>
                                    <>
                                        <li className="header_li">
                                            <Button text={"kostenlose beratung"} variant={"button-1"}/>
                                        </li>
                                    </>
                                </div>
                            </ul>
                        </nav>
                        <div className={active ? "hamburger hamburger_active" : "hamburger"} onClick={()=>{setActive(!active)}}>
                            <span className="one"></span>
                            <span className="two"></span>
                            <span className="three"></span>
                        </div>
                    </div>


                    <div className="solution_info">
                        <div className="df gap9 container_adaptive">
                            <div>
                                <h1 className="solution_h1">#1 digitale lösungen <br/>
                                für ihr UNTERNEHMEN</h1>
                                <h3 className="solution_h3">
                                    Einfach und unkompliziert unterstützen wir Sie dabei, ein <br/> erfolgreicher Online-Händler zu werden.
                                </h3>
                                <ul className="solution_mark_ul">
                                    <li className="solution_mark_li"><p>Instagram Reels & TikTok Videos</p></li>
                                    <li className="solution_mark_li"><p>Performance Marketing</p></li>
                                    <li className="solution_mark_li"><p>Webseiten & Online-Shops</p></li>
                                </ul>
                                <div className="df mt50 pb30 adaptive_button">
                                    <Button text={"JETZT ANRUFEN"} variant={"button-2 mr25"}/>
                                    <Button text={"anfrage senden"} variant={"button-3 adaptiveAnotherBtn"}/>
                                </div>
                            </div>
                            <div>
                                <img src={Scene} alt=""/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
             <img src={Waves} alt="" className="waves"/>
        </>
    );

};

export default SolutionCompany;
