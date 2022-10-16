import React from 'react';
import '../Item/Item.css';
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
import veg from '../Images/Veg.jpg';
import nonveg from '../Images/Nonveg.png';

export default function Item({ veg_non, dish_name, quantity, dish_price, total_price, increment, decrement }) {
    return (
        <div className='Item-outer'>
            <div className='Item-inner'>
                <div className='Item-left-outer'>
                    <img className='Item-symbol' src={veg_non === "veg" ? veg : nonveg} />
                    <div className='Item-dish'><label className='Item-dish-name'>{dish_name}</label></div>
                </div>

                <div className='Item-middle-outer'>
                    <div className='Item-middle-inner'>
                        <label><MinusIcon h={4} w={5} onClick={decrement} /></label>
                        <label className='Items-middle-content'><label className='Item-dish-quatity'>{quantity}</label></label>
                        <label><SmallAddIcon h={6} w={6} onClick={increment} /></label>
                    </div>
                </div>

                <div className='Item-right-outer'>
                    <div className='Item-dish-price'><label className='Item-dish-price'>{total_price} /-</label></div>
                </div>
            </div>
        </div>
    )
}
