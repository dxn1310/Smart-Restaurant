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

export default function AccordionMenu({ Menu, types, quantities, setQuantities }) {



    const decrement = (id, index) => {
        if (quantities[id][index] > 0) {
            const a = quantities[id]
            a[index]--
            setQuantities(quantities => [
                ...quantities.slice(0, id),
                a,
                ...quantities.slice(id + 1)
            ])
            console.log(quantities)
        }
    }
    const increment = (id, index) => {
        // quantities[id][index]++
        const a = quantities[id]
        a[index]++
        setQuantities(quantities => [
            ...quantities.slice(0, id),
            a,
            ...quantities.slice(id + 1)
        ])
        console.log(quantities)
    }

    const getType = (type) => {
        console.log(type)
    }


    const accordionMenu = <Accordion defaultIndex={[]} allowMultiple>
        {types.map((type, index) => (
            <AccordionItem key={nanoid()} id={type} onClick={() => getType(type) }>
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
                    <Cards foodItem={Menu[type]} key={nanoid()} id={type} decrement={decrement} increment={increment} typeIndex={index} values={quantities[index]} />
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