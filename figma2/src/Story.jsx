import './App.css'
import React from 'react';
import cofeone from './assets/cofe1.png'
import cofetwo from './assets/cofe2.png'
import cofefour from './assets/cofe4.png'

function Story(){
    return (
        <div className="story">
            <div className="left">
                <img className='cofetwo' height={300} width={300} src={cofetwo} alt="" />
                <img className='cofeone' height={300} width={300} src={cofeone} alt="" />
                <img src={cofefour} height={650} className='cofefour' alt="" />
            </div>
            <div className="right">
                <div className="history">
                    <p>Our history</p>
                    <h1>Create a <br />
new story with us</h1>
<p className="second">mauris rhoncus in imperdiet placerat.  vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. <br /> cars massa nibhtincidunt. donec et nibh maximus, est <br /> eu, mattis nuce. preasent ut quam quis quam venen <br />
atis fringilla. morbi vastibulum id tells mmodo mattis. <br /> aliauam erat volutpal.</p>
                </div>
            </div>
        </div>
    )
}
export default Story;