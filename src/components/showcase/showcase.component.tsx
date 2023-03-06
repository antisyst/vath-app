import './showcase.styles.scss';
import ShowcaseImg from '../../images/vath-asset-3.jpg';
import LeafIcon from '../../icons/leaf-icon';
import React, { Component } from 'react';
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';

export default function Showcase() {
    return(
        <div className='import-hero-section-showcase-prototype-element_context'>
       <MotionAnimate reset={true}>
       <Zoom left>
        <div className='import-hero-section-showcase-prototype-element'>
        <div className="import-hero-section-showcase-prototype-element-item">
            <h1>Fastest Delivery :)</h1>
            <p>Do you need last day delivery? We are here to rescue you. By using our shipping service, your goods will arrive in less than a day.</p>
            <br /><br />
            <a href="#aqoSwDjnwokoyaAo">Learn more</a>
        </div>
        <div className="import-hero-section-showcase-prototype-element-item">
            <img src={ShowcaseImg} alt="" className='import-hero-section-showcase-prototype-element-item-component_img'/>
        </div>
      </div>
      </Zoom>
      </MotionAnimate>
      <div className='arrow-container'>
      <div className="tickle-arrow"></div>
      </div>
      </div>
    )
}