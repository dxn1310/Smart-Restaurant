import React from 'react';
import './Basit.css';
import { Button, Input, ButtonGroup } from '@chakra-ui/react';

export default function basit() {
    return (
        <div className='Basit-outer'>
            <div className='Basit-inner'>
                <div className='basit-login'>
                    <div className='Basit-buttons'>
                        <Button width="15rem"
                        >
                            Button
                        </Button>

                        <Button width="10rem">
                            Button
                        </Button>
                        <Button width="10rem">
                            Button
                        </Button>

                    </div>
                    <div className='Basit-username'>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='Basit-password'>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='Basit-signin'>
                        edhueifh
                    </div>
                </div>
            </div>

        </div>
    )
}
