import React from 'react';
import { skills } from '../../Data';
import './skills.css'
import {FaPython, FaReact, FaJava, FaHtml5, FaCss3, FaGitAlt, FaFigma} from 'react-icons/fa';
import {RiJavascriptFill} from 'react-icons/ri';
// import {TbBrandCpp} from 'react-icons/tb';
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";

import {DiMongodb} from 'react-icons/di';
import { SiMysql } from "react-icons/si";
const iconMapping = {
  Python: <FaPython />,
  React: <FaReact />,
  Java: <FaJava />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  Git: <FaGitAlt />,
  JavaScript: <RiJavascriptFill />,
  Cpp: <TbBrandCpp />,
  MongoDB: <DiMongodb />,
  MySQL: <SiMysql />,
  ReactNative: <TbBrandReactNative />,
  Figma: <FaFigma />
  // ReactNative: <TbBrandReactNat />
};

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className="section__title text-cs">Skills</h2>
      <p className="section__subtitle">
        {/* My <span>Talent</span> */}
        My <span>Expertise</span>
      </p>
      
      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => (
          <div className="skills__item" key={index}>
            <div className="skills__titles">
            <div className='skills__icon'>{iconMapping[name]}</div>
              <h3 className="skills__name">{name}</h3>
              <span className="skills__number">
                {percentage} <span>%</span>
              </span>
            </div>
            <p className="skills__description">{description}</p>
            <div className="skills__bar">
                <span className="skills__percentage" 
                style={{width: `${percentage}%`}}>
                    {/* <span></span> */}
                </span>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
