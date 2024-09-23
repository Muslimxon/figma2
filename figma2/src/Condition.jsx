import './App.css'
import React from 'react';
import cofe1 from './assets/cofe1.png'
import cofe2 from './assets/cofe2.png'
import cofe3 from './assets/cofe3.png'

function Condition() {
    return(
    <div className="condition">
        <div className="one">
            <h1><span>01</span> Best Coffee Flavour</h1><br />
            <img className='cofe' width={360} src={cofe1} alt="" />
        </div>
        <div className="one">
            <h1><span>02</span> Place to get lost</h1><br />
            <img className='cofe' width={360} src={cofe2} alt="" />
        </div>
        <div className="one">
            <h1><span>03</span> Proper roesting</h1><br />
            <img className='cofe' width={360} src={cofe3} alt="" />
        </div>

    </div>
    )
}
export default Condition ;