import React, { useState } from 'react';

import './navbar.css'
import car from "../../assests/images/car.png"
import toggle from "../../assests/images/toggle.png"
import { navigation } from "../Datas/Datas"
export default function Navbar() {
    const [navshow, setNavshow] = useState(false);

    const shohideNav = () =>{
        setNavshow(!navshow)
    }
    return (
        <div>
            <div className='container'>
                <ul className='topnav'>
                    <li><img src={car} alt={"logo"} /></li>
                    <li> TowTrackr </li>
                    <li onClick={shohideNav}><img src={toggle} alt={"toggle menu"} /></li>
                </ul>

                <ul className={`navbar ${navshow ? "show" :"hide"}`}>
                    {navigation && navigation.map((item,index)=>{
                        return <li className={index ===0 ? "selected" : ""}> <img src={`http://localhost:3000/images/${item.url}.png`} alt={item.name}/> <a> {item.name} </a></li>
                    })}
                </ul>
            </div>
        </div>
    );
}
