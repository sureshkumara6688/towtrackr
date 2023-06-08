
import * as React from 'react';

import './navbar.css'
import car from "../../assests/images/car.png"
import toggle from "../../assests/images/toggle.png"
import { navigation } from "../Datas/Datas"
export default function Navbar() {


    return (
        <div>
            <div className='container'>
                <ul className='topnav'>
                    <li><img src={car} alt={"logo"} /></li>
                    <li> TowTrackr </li>
                    <li><img src={toggle} alt={"toggle menu"} /></li>
                </ul>

                <ul className='navbar'>
                    {navigation && navigation.map((item,index)=>{
                        return <li className={index ===0 ? "selected" : ""}> <img src={`http://localhost:3000/images/${item.url}.png`} alt={item.name}/> <a> {item.name} </a></li>
                    })}
                </ul>
            </div>
        </div>
    );
}
