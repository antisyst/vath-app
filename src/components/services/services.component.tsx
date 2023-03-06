import './services.styles.scss';
import { IoFastFoodOutline } from 'react-icons/io5';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { IoCarSportOutline } from 'react-icons/io5';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { AiFillCar } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { BsFillBoxFill } from 'react-icons/bs';
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';



export default function Services() {
    return(
        <div className='import-service-third-section-component-prototype'>
            <Zoom left>
            <h1 className='import-service-third-section-component-prototype-first-content'>Services</h1>
            </Zoom>
            <div className='import-service-third-section-component-prototype-container'>
            <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><IoFastFoodOutline/></span>
                    <h1>Food Delivery</h1>
                    </div>
                    <p>Order the delivery of the food you want to your home or office. Visit the site, enter your address and enjoy delicious food.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><BsBriefcase/></span>
                    <h1>Privacy Delivery</h1>
                    </div>
                    <p>The delivery of goods signifies the voluntary transfer of possession from one person to another.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><AiOutlineThunderbolt/></span>
                    <h1>Premium Delivery</h1>
                    </div>
                    <p>Premium shipping is a delivery option that allows eCommerce retailers to offer customers high-quality, fast, and affordable shipping solutions.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><IoCarSportOutline/></span>
                    <h1>Luxury Delivery</h1>
                    </div>
                    <p>Luxury service transportation is carried out with high quality and new generation vehicles.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><BiMoneyWithdraw/></span>
                    <h1>Money Delivery</h1>
                    </div>
                    <p>We provide money from the delivery of money to the remote or remotely by our service.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><AiFillCar/></span>
                    <h1>Car Delivery</h1>
                    </div>
                    <p>Car Delivery is the transport of a motor vehicle or car on a specially built truck. </p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><BiStore/></span>
                    <h1>Store Delivery</h1>
                    </div>
                    <p>Store Delivery is a method of delivering products from a supplier or distributor directly to a retail store, thereby bypassing a retailer's distribution center.</p>
                </div>
                </MotionAnimate>
                <MotionAnimate reset={true}>
                <div className="import-service-third-section-component-prototype-container_item">
                    <div className='import-service-third-section-component-prototype-container_item-first'>
                    <span><BsFillBoxFill/></span>
                    <h1>Heavy Delivery</h1>
                    </div>
                    <p>Whether heavy goods are cautiously and completely damaged transportation of heavy goods are fully implemented by our service.</p>
                </div>
                </MotionAnimate>
            </div>
        </div>
    )
}