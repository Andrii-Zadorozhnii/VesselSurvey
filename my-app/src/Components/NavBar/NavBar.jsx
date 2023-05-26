import React from "react";
import { Link } from "react-router-dom";
import './NavBar.scss';

function NavigationBar() {
    return (
        <div className='navigation-panel'>
            {/*<Link to="/">Link 1</Link>*/}
            {/*<Link to="/page2">Link 2</Link>*/}
            {/*<Link to="/page3">Link 3</Link>*/}
            {/*<Link to="/page4">Link 4</Link>*/}
            {/*<Link to="/page5">Link 5</Link>*/}
            <p>VESSEL CALCULATOR</p>
        </div>
    );
}

export default NavigationBar;
