
import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ToggleButton from '@mui/material/ToggleButton';

import './index.css'

export default function Aside() {




    const children = [
        <ToggleButton >
            <FormatAlignLeftIcon />
        </ToggleButton>,
    ];

    return (
        <div>
            <div className='aside'>
                <label>Basic Price</label>
                <h1>$150 AUD</h1>
                <div className='price-mention'>
                    Add-on</div>
                <p>No Add-ons Added</p>
                
                <div className='total'>
                    <div className='line'></div>
                    <div className='gtotal'>
                        <div className='text'>Grand total</div>
                        <div className='money'> $150</div>
                    </div>
                    <div>
                        <button type="button" className='primary'> Confirm and Pay </button>
                        <button  type="button"className='scondary'> Reset</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
