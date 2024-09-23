import './App.css'
import React from 'react';
import play from './assets/Play.png'

function Header() {
    return (
        <div className="header">
            <div className="chap">
                <h1 className="morning">Enjoy Your <br />Morning Coffee.</h1>
                <p className="coofee">
                The coofee is brewed by fist roasting the green coffee <br /> beans over hot coals in brazier. given to Opportunity
                </p>
                <button className="test">Test Coffee</button>
            </div>

            <div className="ong">
                <img src={play} alt="" className="play" />
            </div>
        </div>
    );
}
export default Header;