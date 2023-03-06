import './footer.styles.scss';
import FooterIcon from '../../icons/footer-icon';

export default function Footer() {
    return(
        <div className='import-last-section-footer-prototype-element' id='bot'>
            <div className='import-last-section-footer-prototype-element_item'>
                <FooterIcon/>
                <h1>Give it to us, we will carry it :)</h1>
                <p>Copyright 2023 © All Rights Reserved by Vath.</p>
                <h2>Developed by <a href="">Ramazan Azimli</a></h2>
            </div>
            <div className='import-last-section-footer-prototype-element_item import-last-section-footer-prototype-element_item_2'>
                <h3>Contact</h3>
                <div className='footer-contant-list-item-prototype-component'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4628/4628635.png" alt="" />
                    <p>+1 (940) 723-5610</p>
                </div>
                <div className='footer-contant-list-item-prototype-component'>
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="" />
                    <p>+44 1632 960539</p>
                </div>
                <div className='footer-contant-list-item-prototype-component'>
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197579.png" alt="" />
                    <p>+47 9317 7112</p>
                </div>
                <div className='footer-contant-list-item-prototype-component'>
                    <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" alt="" />
                    <p>+1-613-555-0144</p>
                </div>
                <div className='footer-contant-list-item-prototype-component'>
                    <img src="https://cdn-icons-png.flaticon.com/512/323/323332.png" alt="" />
                    <p>+49 30 392401618</p>
                </div>
            </div>
        </div>
    )
}