import React, { useEffect, useState } from 'react';
import HeaderDiv from '../menu_components/HeaderDiv'
import AccordionMenu from '../menu_components/AccordionMenu';
import Footer from '../../Landing/landing_components/Footer.js'
import "./Menu.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { NavLink as Link } from 'react-router-dom';

export default function Menu({ order, setOrder }) {

    const [types, setTypes] = useState(["Chinese", "Indian", "Chinese1", "Indian1"])
    const [Menu, setMenu] = useState(
        {
            Chinese: [{
                _id: 123,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
                name: "Paneer Punjabi Chicken",
                price: 200,
            }, {
                _id: 234,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
                name: "dragon chicken",
                price: 200,
            }],
            Indian: [{
                _id: 235,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
                name: "Biriyani",
                price: 300,
            }],
            Chinese1: [{
                _id: 238,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
                name: "Paneer Punjabi Chicken",
                price: 200,
            }, {
                _id: 789,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
                name: "dragon chicken",
                price: 200,
            }],
            Indian1: [{
                _id: 456,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magnam!",
                name: "Biriyani",
                price: 300,
            }]
        }
    )


    // const rawQuantites = types.map(type => Array(Menu[type].length).fill(0))
    const [quantities, setQuantities] = useState(types.map(type => Array(Menu[type].length).fill(0)))

    useEffect(() => {
        const rawQuantites = types.map(type => Array(Menu[type].length).fill(0))
        setQuantities(rawQuantites)
    }, [Menu])

    React.useEffect(() => {
        console.log(quantities)
        const a = []
        quantities.forEach((quantity, upperIndex) => {

            const type = types[upperIndex]

            quantity.forEach((activeQuantity, lowerIndex) => {
                if (activeQuantity > 0) {
                    a.push({ ...Menu[type][lowerIndex], quantity: activeQuantity })
                }
            })
        })
        setOrder(a)
    }, [quantities])

    return (
        <div className='page-conatainer'>
            <div>
                <HeaderDiv />
                <AccordionMenu types={types} Menu={Menu} quantities={quantities} setQuantities={setQuantities} />
                <Link to="/Cart">
                    <Button flex="1" colorScheme='blue'>View Cart</Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}