import './advanced-container.styles.scss';
import { TbTruckDelivery } from 'react-icons/tb';
import { TbUrgent } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { MdOutlineSavings } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import CourierIcon from '../../icons/courier-icon';
import React, { Component } from 'react'
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';

export default function AdvancedContainer() {
    return(
        <div  id='aqoSwDjnwokoyaAo'>
        <div className='import-advanced-container-tsx-component-prototype-bottom'>
              <Zoom left>
            <h1 className='import-advanced-container-tsx-component-prototype-bottom-first-content'>Advantages</h1>
            </Zoom>
            <div className="import-advanced-container-tsx-component-prototype-bottom-container">
            <MotionAnimate reset={true}>
                <div className="import-advanced-container-tsx-component-prototype-bottom-container_item">
                    <div className='import-advanced-container-tsx-component-prototype-bottom-container_item-first'>
                    <span><TbTruckDelivery/></span>
                    <h1>Fast Delivery</h1>
                    </div>
                    <p>Vath makes it incredibly easy for you to discover and get what you want. Delivered to you – quickly, reliably and affordably.</p>
                </div>
                </MotionAnimate>
            <MotionAnimate reset={true}>
                <div className="import-advanced-container-tsx-component-prototype-bottom-container_item">
                    <div className='import-advanced-container-tsx-component-prototype-bottom-container_item-first'>
                    <span><CourierIcon/></span>
                    <h1>Local Service</h1>
                    </div>
                    <p>Now it's easier to get your orders. We deliver your orders to your address using our courier service</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-advanced-container-tsx-component-prototype-bottom-container_item">
                    <div className='import-advanced-container-tsx-component-prototype-bottom-container_item-first'>
                    <span><TbUrgent/></span>
                    <h1>Urgent Service</h1>
                    </div>
                    <p>You can choose the "Urgent order" service for order fulfillment outside the queue. Urgent order is processed within 30 minutes.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-advanced-container-tsx-component-prototype-bottom-container_item">
                    <div className='import-advanced-container-tsx-component-prototype-bottom-container_item-first'>
                    <span><BiSupport/></span>
                    <h1>24/7 Support</h1>
                    </div>
                    <p>We provide special service and individual support to our customers every day of the year</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-advanced-container-tsx-component-prototype-bottom-container_item">
                    <div className='import-advanced-container-tsx-component-prototype-bottom-container_item-first'>
                    <span><MdOutlineSavings/></span>
                    <h1>Save Money</h1>
                    </div>
                    <p>We are now at your service with the most affordable and suitable prices that will save your money, imagining a world without borders where products and services will find their customers freely.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-advanced-container-tsx-component-prototype-bottom-container_item">
                    <div className='import-advanced-container-tsx-component-prototype-bottom-container_item-first'>
                    <span><GoLocation/></span>
                    <h1>Many Places</h1>
                    </div>
                    <p>For the convenience of our customers, our branches are active everywhere near you and we are developing further. This means that you can use our services from areas close to you without leaving the area where you already live</p>
                </div>
                </MotionAnimate>
            </div>
        </div>
        </div>
    )
}