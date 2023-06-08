
import * as React from 'react';

import './index.css'

export default function Notification({...props}) {
    const { num } = props;

    return (
       <>
            <div className='notification'> {num}</div>
       </>
    );
}
