import './App.css'
import React from 'react';
import two from './assets/two.png'
import { IoBagHandleOutline } from "react-icons/io5";


function Popular() {
    return( 
        <div className="popular">
            <div className="popular_pro">
                <p className='product'>Popular Product</p>
                <h1 className='cofee'>Coffee popular Product</h1>
                <div className="card_container">
                    <div className="two">
                        <img src={two} className='ikki' alt="" />
                        <h2 className='brazil'>brazil coffee gred</h2>
                        <button className="add"> <IoBagHandleOutline />Add to cart</button>

                    </div>
                    <div className="two">
                        <img src={two} className='ikki' alt="" />
                        <h2 className='brazil'>brazil coffee gred</h2>
                        <button className="add"> <IoBagHandleOutline />Add to cart</button>

                    </div>
                    <div className="two">
                        <img src={two} className='ikki' alt="" />
                        <h2 className='brazil'>brazil coffee gred</h2>
                        <button className="add"> <IoBagHandleOutline />Add to cart</button>

                    </div>
                </div>
                <button className="view">View all product</button>

            </div>
        </div>
    )
}
export default Popular;