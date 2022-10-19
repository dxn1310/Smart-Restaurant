import React, { useEffect, useState } from 'react';
import '../Cart/Cart.css';
import Item from '../Item/Item.js';
import Bill from '../Bill/Bill';
import Details from '../Details/Details.js';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, } from '@chakra-ui/react';
import { NavLink as Link, Route, Routes } from 'react-router-dom';
// import Details from '../Details/Details';

export default function Cart({ orderState, setOrderState, order, name }) {
    console.log(name);

    const [total_amt, setTotal_amt] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const totalCosts = orderState.map(order => order.quantity * order.price)
        console.log('connected in useffect')
        let total = 0
        totalCosts.forEach(itemCost => {
            total += itemCost
        })
        setTotal_amt(total)
    }, [orderState])

    const increment = (index) => {
        console.log(`Incremented ${index}`)
        const currentItem = orderState[index]
        currentItem.quantity++
        setOrderState(orderState => (
            [...orderState.slice(0, index),
                currentItem,
            ...orderState.slice(index + 1)
            ]
        ))
    }

    const decrement = (index) => {
        console.log(`Decremented ${index}`)
        const currentItem = orderState[index]

        if (currentItem.quantity === 1) {
            setOrderState(orderState => (
                [...orderState.slice(0, index),
                ...orderState.slice(index + 1)
                ]
            ))
        }
        else {
            currentItem.quantity--
            setOrderState(orderState => (
                [...orderState.slice(0, index),
                    currentItem,
                ...orderState.slice(index + 1)
                ]
            ))
        }
    }
    return (
        <div className='Cart-outer'>
            <div className='Cart-back-option'>
                <ArrowBackIcon w={10} h={10} />
                <label className='Cart-back-option-content'>My Order</label>
            </div>

            <div className='Cart-items-outer'>
                <div className='Card-item-inner'>
                    <div className='Card-items-title'>
                        <label className='Card-items-title-content'>Your Order</label>
                    </div>

                    {
                        orderState.map((item, index) => (
                            <Item
                                veg_non={item.veg_non}
                                dish_name={item.name}
                                dish_price={item.price}
                                quantity={item.quantity}
                                total_price={item.quantity * item.price}
                                increment={() => increment(index)}
                                decrement={() => decrement(index)}
                            />
                        ))
                    }
                </div>
            </div>

            {
                orderState.length === 0 ? <label>Cart empty add items</label> :
                    <>
                        <div className='Cart-items-outer1'>
                            <div className='Card-item-inner'>
                                <div className='Card-items-title'>
                                    <label className='Card-items-title-content'>Bill Details</label>
                                </div>

                                <Bill total_price={total_amt} total_tax={500} total_pay={total_amt + 500} veg_non={"non"} />
                            </div>
                        </div>



                        <div className='Card-items-button'>
                            <Link to="/Details">
                                <Button rightIcon={<ArrowForwardIcon />}
                                    colorScheme='teal'
                                    padding='2%'
                                    borderRadius='1rem'
                                    borderTopRightRadius='0'
                                    borderTopLeftRadius='0'
                                    width='100%'
                                    height='5rem'
                                    fontSize='2rem'>
                                    Place Order
                                </Button>
                            </Link>
                        </div>
                    </>
            }
        </div>
    )
}
