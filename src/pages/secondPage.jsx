import React from "react";

const SecondPage = () => {


    return (
        <>
            <div className="secondPage">
                <div className="container">
                    <div className="waves">
                        <div className="wave_black"/>
                        <div className="wave_blue"/>
                        <div className="wave_light"/>
                    </div>
                    <div className="secondPage_box">
                        <div className="second_subtext">Ihr Erfolg ist <br/> unser Erfolg</div>
                        <div className="SecondPage_title">Ihr Erfolg ist
                            <span className="SecondPage_title_span"> unser Erfolg</span>
                        </div>
                        <hr/>
                        <div className="stars">
                            <div className="image_star"/>
                            <div className="image_star"/>
                            <div className="image_star"/>
                            <div className="image_star"/>
                            <div className="image_star"/>
                        </div>
                    </div>
                    <div className="secondPage_box2">
                        <div className="vector"/>
                        {/*<div>*/}
                        {/*    <div className="box_img1"></div>*/}
                        {/*    <div className="box_img2"></div>*/}
                        {/*    <div className="box_img3"></div>*/}
                        {/*    <div className="box_img4"></div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondPage;