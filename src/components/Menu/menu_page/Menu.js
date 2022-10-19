import React from 'react';
import HeaderDiv from '../menu_components/HeaderDiv'
import AccordionMenu from '../menu_components/AccordionMenu';
import Footer from '../../Landing/landing_components/Footer.js'
import "./Menu.css";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { NavLink as Link } from 'react-router-dom';

export default function Menu({ order, setOrder}) {
    
    const types = ["Chinese", "Indian", "Chinese1", "Indian1"]
    const Menu =
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

    return (
        <div className='page-conatainer'>
            <div>
                <HeaderDiv />
                <AccordionMenu types={types} Menu={Menu} order={order} setOrder={setOrder}/>
                <Link to="/Cart">
                    <Button flex="1" colorScheme='blue'>View Cart</Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}