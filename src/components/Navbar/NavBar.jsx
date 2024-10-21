import React, { useState } from 'react'
import Style from './NavBar.module.css'
import mail from '../../assets/svg/staff_mail.svg'
import person from '../../assets/svg/staff_person.svg'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

    const [activeNav, setActiveNav] = useState('');

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
    };


    return (
        <div id={Style.CustomerCare_NavBar_mainDiv}>

            <div id={Style.Navbar_firstWrapperDiv}>

                <p id={Style.logoText}>Logo</p>

                <div id={Style.Navbar_textsDiv}>

                    <NavLink to={"/dashboard"} className={`${Style.NavBar_text} ${activeNav === 'dashboard' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('dashboard')}>
                        <p>Dashboard</p>

                    </NavLink>
                    <NavLink to={"/queries"} className={`${Style.NavBar_text} ${activeNav === 'query' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('query')}>
                        <p>Query Management</p>
                    </NavLink>


                    <NavLink to={"/allUsers"} className={`${Style.NavBar_text} ${activeNav === 'users' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('users')}>
                        <p>Users</p>
                    </NavLink>

                </div>
            </div>
            <div id={Style.Navbar_lastLineDiv}>

                <NavLink to={"/performance"} className={`${Style.NavBar_text} ${activeNav === 'performance' ? Style.Nav_styled_Link : ''}`} onClick={() => handleNavClick('performance')}>
                    <p>Performance</p>
                </NavLink>

                <p>Mgt</p>
                <p>English</p>
                <div id={Style.line}></div>
                <div id={Style.imgDiv}>
                    <img src={mail} alt="" />
                    <img src={person} alt="" />
                </div>
                <p>WhiteHouse Ltd</p>

            </div>

        </div>
    )
}

export default NavBar