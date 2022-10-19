import React from 'react';
import '../Order_Confirm/Order_confirm.css';
import { CheckCircleIcon } from '@chakra-ui/icons'


export default function Order_confirm({ name, phone }) {
    // console.log(exlist[0].name);
    console.log(name);
    console.log(phone); 
    return (
        <div className='Order-outer'>
            <div className="Order-inner">
                < CheckCircleIcon width="10rem" height="10rem" />
                <div className='Order-text-outer'>
                    <label className='Order-text'>
                        Order Confirmed!!!!!
                    </label>
                </div>

            </div>


        </div>
    )
}
