import React, { useEffect, useState } from 'react';
import ReactTyped from "react-typed";
import porfileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";

import './home.css';
import Skills from '../skills/Skills';

const Home = () => {

    
  return (
  <section className='home' id='home'>
    <div className="home__wrapper">
    <div className="home__container container">
        
        <p className='home__subtitle text-cs'>
            Hello, <span>My Name Is </span>
        </p>

        <h1 className='home__title text-cs'>
            <span>Annu</span> Kumari
        </h1>

        <p className='home__job'>
            <span className='text-cs'>I Am a</span>
            <b >
                {/* Full-Stack Developer */}
                <Typewriter
                    options={{
                        strings: [
                        "Developer",
                        "Designer",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                    />
            </b>
          
        </p>
        <div className='home__img-wrapper'>
            <Tilt scale={1.05} transitionSpeed={3000}>
            <div className='home__banner'>
                
                <img src={porfileImg} alt="avatar" className='home__profile' />
               
            </div>
            </Tilt>
           
        </div>
        
        <p className='home__text'>
        Third year Computer Science and Design student at Indraprastha Institute of Information Technology, Delhi. 
        Welcome to my little space on the internet where I document my journey of learning new technologies and finding my place in the tech world.
        </p>
        <div className='home__socials'>
            <a href='https://github.com/Annu117' className='home__social-link'target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/annu-kumari-3686b3238/' className='home__social-link'target='_blank' rel='noopener noreferrer'> 
                <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/annu1.817/?hl=en' className='home__social-link' target='_blank' rel='noopener noreferrer'>
                <FaInstagram />
            </a>
            <a href='mailto:annu21312@iiitd.ac.in' className='home__social-link' target='_blank' rel='noopener noreferrer'>
                <SiGmail />
            </a>
        </div>
        <div className='home__btns'>
           <a href='' className="btn text-cs">
                {/* Download CV */}
                <span class="zoom-text">Download CV</span>
            </a>
            <a href='#skills' className='hero__link text-cs'>
              My Skills
            </a>
        </div>
    </div>
    </div>
  </section>
  );
}
export default Home;
