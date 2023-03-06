import './client.styles.scss';
import ContainerImg from '../../images/vath-asset-1.jpg';
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';

export default function Client() {
    return(
        <MotionAnimate reset={true}>
        <div className='import-class-client-section-component-prototype-element'>
            <div className='import-class-client-section-component-prototype-element-container'>
            <Zoom>
                <div className='import-class-client-section-component-prototype-element-container_item'>
                    <h1>Customer Satisfaction</h1>
                    <p>By this time, we have fully implemented the shipment of all our customers. We have completely eliminated their problems when our customers need support or help. As a result, we have gained their satisfaction :)</p>
                </div>
                </Zoom>
                <Zoom>
                <div className='import-class-client-section-component-prototype-element-container_item'>
                    <img src={ContainerImg} alt="Customer happiness" />
                </div>
                </Zoom>
            </div>
        </div>
        </MotionAnimate>
    )
}