
import './MainSection.scss';
import InitialSection from "./InitiaSection/InitialSection";
import FinalSection from "./FinalSection/FinalSection";

const MainSection = () => {
    return(
        <div className='main-section'>
            <InitialSection/>
            <FinalSection/>
        </div>
    )

}

export default MainSection;