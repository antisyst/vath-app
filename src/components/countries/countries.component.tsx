import './countries.styles.scss';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';



export default function Countries() {
    return(

        <div className='import-class-countries-section-component-prototype-element'>
       <MotionAnimate reset={true}>
           <Zoom left>
             <div className='import-class-countries-section-component-prototype-element-first-content'>Countries</div>
            </Zoom>
      </MotionAnimate>
            <div className="import-class-countries-section-component-prototype-element-container">
       <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                    <img src="https://cdn-icons-png.flaticon.com/512/4628/4628635.png" alt="USA" />
                <h1>United States</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="UK" />
                <h1>United Kingdom</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197579.png" alt="Norway" />
                <h1>Norway</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197571.png" alt="Germany" />
                <h1>Germany</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197564.png" alt="Sweden" />
                <h1>Sweden</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" alt="Canada" />
                <h1>Canada</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197512.png" alt="Azerbaijan" />
                <h1>Azerbaijan</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197583.png" alt="Belgium" />
                <h1>Belgium</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/323/323275.png" alt="Netherland" />
                <h1>Netherland</h1>
                </div>
      </MotionAnimate>
      <MotionAnimate reset={true}>
                <div className="import-class-countries-section-component-prototype-element-container_item">
                <img src="https://cdn-icons-png.flaticon.com/512/197/197560.png" alt="France" />
                <h1>France</h1>
                </div>
      </MotionAnimate>
            </div>
            <div>
                <h1 className='import-class-countries-section-component-prototype-element-last-content'>We growing up ... <span><BsFillRocketTakeoffFill/></span></h1>
            </div>
        </div>
    )
}