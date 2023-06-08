
import * as React from 'react';
import './index.css'
import notificationIcon from "../../assests/images/notification.png"
import Notification  from "../../Shared/Notification"

export default function Headers() {

    return (


        <div className='head'>
            <h1>Welcome Back, Super Administrator</h1>
            <div className='userinfo'>
                <div className='notify'>
                    <img src={notificationIcon} alt='notication icon'/>
                    <div className='moveIcon'> 
                    <Notification num={5}/>
                    </div>
                   
                </div>
                <div className='shortname'> <span>SA</span></div>
                <div className='nameemail'>
                    <div> <label>Super Administrator</label></div>
                    <div className='email'>super.admin@towtrackr.com </div>
                </div>
            </div>
        </div>


    );
}
