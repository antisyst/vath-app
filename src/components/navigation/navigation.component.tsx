import './navigation.styles.scss';
import ImportLogo from '../../icons/import-logo';
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navigation() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
    return(
        <>
        <div className='import-navigation-topbar-element-prototype-between'>
            <div className='import-navigation-topbar-element-prototype-between_item'>
                <ImportLogo/>
            </div>
            <div className='import-navigation-topbar-element-prototype-between_item'>
                <p>we love you :)</p>
            </div>
        </div>
        <motion.div className="progress-bar" style={{ scaleX }} />
        </>
    )
}