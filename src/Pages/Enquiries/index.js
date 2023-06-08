
import * as React from 'react';

import { enquiriesFrom } from "../../Shared/Datas/Datas";
import FormBuilder from "../../Shared/Formbuilder/index"
import Aside from "../../Aside/index"
import "./index.css"
import Notification  from "../../Shared/Notification"
export default function Enquiries() {

    return (

        <div>
            <h1>Enquiries</h1>
            <div className='enqbtn'>
                <button type="button" className='primary'> Take New Enquiry</button>
               
                <button type="button" className='scondary'> Pending Payments</button>
                <div className='notificationmove'> 
                <Notification num={18}/>
                </div>
               
               
            </div>
            <div className='enquiries'>
                <div className='service-details'>
                    <FormBuilder fields={enquiriesFrom} />
                </div>
                <div className='basic-price'>
                    <Aside />
                </div>
            </div>
        </div>
    );
}
