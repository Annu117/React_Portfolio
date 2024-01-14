import React from 'react'
import { FaArrowRight} from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import {motion} from 'framer-motion';

const Items = ({porjectItems}) => {
  return (
    <>
    {porjectItems.map((porjectItem) =>{
        const {id, img, category, title, description, githubLink, websiteLink} = porjectItem;
        return(
            <motion.div
            layout 
            animate={{opacity:1, scale:1}}
            initial={{opacity:0.8,scale:0.6}}
            exit={{opacity: 0.8, scale:0.6}}
            transition={{duration:0.3}}
            className="portfolio__items card card-two" key= {id}>
                <div className="portfolio__img-wrapper">
                    <img src={img} alt="" className="portfolio__img" />
                </div>
                <span className="portfolio__category text-cs">{category}</span>
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>
            <div className="links-container">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link project__link"
              >
                GitHub
              </a>
              {websiteLink && ( // Render website link only if available
                <>
                  <span className="separator">  |  </span>
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link project__link"
                  >
                    Website
                    {/* <FaArrowRight className='link__icon'></FaArrowRight> */}
                  </a>
                </>
              )}
              <FaArrowRight className='link__icon'></FaArrowRight>
            </div>
            {/* <img src={shapeTwo} alt="" className="shape c__shape" /> */}

            </motion.div>
        );
    })}
    </>
  )
}

export default Items;