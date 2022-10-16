import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { NavLink as Link } from 'react-router-dom';
import Cart from '../Cart/Cart.js';

export default function Menu() {
    const [total_amt, setTotal_amt] = useState(0);


    const order = [
        {
            name: "Biriyani",
            price: 345,
            quantity: 2,
            veg_non: "non",
        },
        {
            name: "Dragon Chicken",
            price: 780,
            quantity: 1,
            veg_non: "veg",
        },
    ]
    const [orderState, setOrderState] = useState(() => order)
    console.log(orderState)
    return (

        <div>
            <label>
                add item
            </label>
            <Cart
                orderState={orderState}
                setOrderState={setOrderState}
            />
        </div >
    )
}
