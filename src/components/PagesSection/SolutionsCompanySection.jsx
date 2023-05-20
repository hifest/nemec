import React from 'react';
import logo from '../../images/logo.png';
import Button from "../Button";
import Scene from "../../images/solScene.png";
const SolutionCompany = () => {
    return (
        <div className="solution_background">
            <div className="container">
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
                    </div>
                    <div className="solution_info">
                        <div className="df gap9">
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
                                <div className="df mt50">
                                    <Button text={"JETZT ANRUFEN"} variant={"button-2 mr25"}/>
                                    <Button text={"anfrage senden"} variant={"button-3"}/>
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
    );
};

export default SolutionCompany;
