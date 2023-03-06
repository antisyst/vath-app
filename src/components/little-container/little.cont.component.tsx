import './little-cont.styles.scss';
import AssetImg from '../../images/vath-asset-2.jpg';
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';



export default function LittleSection() {
    return(
        <div className='import-wait-container-section-prototype-element'>
            <div className="import-wait-container-section-prototype-element-container">
                <Zoom>
                <div className='import-wait-container-section-prototype-element-container_item'>
                    <h1>We wait you ...</h1>
                    <p>We love all our customers. We want to give them the best service to them and are satisfied with it. We would love to be one of them in you. It is a great honor for us to serve you. We will find the answer to all of your questions. We hope you are joining us )</p>
                </div>
                </Zoom>
                <Zoom>
                <div className='import-wait-container-section-prototype-element-container_item'>
                    <img src={AssetImg} alt="Asset Image" />
                </div>
                </Zoom>
            </div>
        </div>
    )
}