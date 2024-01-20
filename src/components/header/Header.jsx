import React, { useEffect, useState } from 'react'
import { links } from '../../Data'
import {BsSun, BsMoon} from 'react-icons/bs'
import './header.css'
import { animateScroll } from 'react-scroll'
import { Link } from 'react-scroll'
const Header = () => {
    const [showMenu, setShowMenu]= useState(false);
    const scrollTop=()=>{
        animateScroll.scrollToTop();
    }
    useEffect(()=>{
        document.body.classList.toggle('no-scroll', showMenu);
    },[showMenu]);
  return (
    <header className="header">
        <nav className="nav">
            <Link to='/' onClick={scrollTop} className="nav__logo test-cs">
                {/* AK */}
            </Link>

            <div className={`${showMenu? 'nav__menu show-menu': 'nav__menu'}`}>
                <div className="nav_data">
                    <ul className="nav__list">
                        {links.map(({name,path},index)=>{
                            return(
                                <li className="nav__item" key={index}>
                                    {/* <a href="" className="nav__link text-cs">
                                        {name}
                                    </a> */}
                                    <Link 
                                    className='nav__link text-css'
                                    to={path} 
                                    spy={true} 
                                    hashSpy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                    onClick={()=> setShowMenu(!showMenu)}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
            {/* <div className="nav__btns">
                <div className="theme__toggle">
                    <BsSun />
                </div>
                <div className="nav__toggle">
                    <span></span>
                    <span></span>
                </div>
            </div> */}
            <div className={`${showMenu?"nav__toggle animate-toggle": 'nav__toggle'}`} 
            onClick={()=> setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
  )
}

export default Header