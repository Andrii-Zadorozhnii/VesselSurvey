import './MainSection.scss';
import InitialSection from "./InitiaSection/InitialSection";
import FinalSection from "./FinalSection/FinalSection";
import React from "react";

const MainSection = () => {
    return (
        <>
            <div className='title'>
                <h3>Initial</h3>
                <h3>Final</h3>
            </div>
            <div className='main-section'>
                <div className='left-side'>
                    <InitialSection/>
                    <FinalSection/>
                </div>

            </div>
        </>

    )

}

export default MainSection;