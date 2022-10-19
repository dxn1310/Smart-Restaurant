import React from 'react';
import Cards from './Cards';
import { nanoid } from 'nanoid';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

export default function AccordionMenu({ Menu, types, order, setOrder }) {



    const decrement = (id, index) => {
        console.log('decrement', id, index)
    }
    const increment = (id, index) => {
        console.log('increment', id, index)
        if (!order) {
            const a = {}
            a[id] = {}
            a[id][index] = 1
            setOrder(a)
        }
        else if (order[id] && order[id][index]) {
            const change = { ...order }
            change[id][index]++
            setOrder(change)
        }
        else {
            const change = { ...order }
            change[id] = {}
            change[id][index] = 1
            setOrder(change)
        }
        console.log(order)
    }

    const accordionMenu = <Accordion defaultIndex={[]} allowMultiple>
        {types.map((type) => (
            <AccordionItem key={nanoid()}>
                <h2>
                    <Box margin={2}>
                        <AccordionButton>
                            <Box flex='1' textAlign='left' fontSize={"larger"} fontWeight={"bold"}>
                                {type}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Box>
                </h2>

                <AccordionPanel pb={4}>
                    <Cards foodItem={Menu[type]} key={nanoid()} id={type} decrement={decrement} increment={increment} />
                </AccordionPanel>

            </AccordionItem>
        ))}
    </Accordion>

    return (
        <div className="accordion-menu">
            {accordionMenu}
        </div>
    );
}