import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import { SidebarData } from './SidebarData';


const NavMenubar: React.FunctionComponent = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
        <header className="header__middle">
            <div className="container">
                <div className="row">
                    <div className="header__middle__logo">
                        <NavLink className='is-active' to="/">
                        </NavLink>
                    </div>
                    <div className="header__middle__menus">
                        <nav className="main-nav " >
                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <> 
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <> 
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}
                            {SidebarData.map((item, index) => {
                                return (
                                    <ul className={boxClass.join(' ')}>
                                        <li  className="menu-item" >
                                            <NavLink key={index} className='is-active' onClick={toggleClass} to={item.path}>{item.icon}{item.title}</NavLink> 
                                        </li>
                                    </ul>
                                   
                                )
                            })}


                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavMenubar