import React from 'react';
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid'
// export default function Card({ description,name,price}) 
export default function Card({ foodItem, id, increment, decrement, typeIndex, values }) {

    return (

        foodItem.map((food, index) => {
            return (
                <div className='card' key={nanoid()}>
                    <div className="card-left">
                        <img className="veg-or-non-veg" />
                        <div className="food-item-name">
                            {food.name}
                        </div>
                        <div className="food-item-description">
                            {food.description}
                        </div>
                        <div className="food-item-price">
                            {`₹ ${food.price}`}
                        </div>
                    </div>
                    <div className="card-right">
                        <img className='food-item-image' />
                        <div className="card-add-item">
                            <label><MinusIcon h={4} w={5} onClick={() => decrement(typeIndex, index)} /></label>
                            <div className='Items-middle-content'>
                                <label className='Item-dish-quatity'>
                                    {values[index]}
                                </label>
                            </div>
                            <label><SmallAddIcon h={6} w={6} onClick={() => increment(typeIndex, index)} /></label>
                        </div>
                    </div>
                </div>

            )
        })
    )
}