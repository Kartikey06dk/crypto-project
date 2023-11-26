import React, { useState } from 'react'
import './styles.css'
import Button from '../../Common/Button'
import phone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import ShareBtn from '../ShareBtn'


function MainComponent({ changeTheme }) {

    const [showPopup, setShowPopup] = useState(false);
    const backgroundColor = changeTheme ? 'white' : 'black';
    const trackCryptoClass = changeTheme ? 'track_crypto1' : 'track-crypto-heading';
    const navigate = useNavigate();

    const handleShowShares = () => {
        setShowPopup(true);
    }

    // Function to handle closing the popup
    const handleClosePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className='flex-info'>

                <div className='left-component'>
                    <motion.h1 className={trackCryptoClass}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >Track Crypto</motion.h1>
                    <motion.h1 className='real-time-heading'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >Real Time.</motion.h1>
                    <motion.p className='info-text'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >Track Crypto through a public api in real time.Visit the Dashboard to do so!</motion.p>
                    <motion.div className='btn-flex'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <Button text={"Dashboard"} onClick={() => navigate('/dashboard')}/>
                        <Button text={"Share"} onClick={handleShowShares} className='sharebtn' outlined={true} />
                    </motion.div>
                </div>
                <div className='right-component'>
                    <motion.img alt='phone' className='iphone' src={phone}
                        initial={{ y: -10 }}
                        animate={{ y: 10 }}
                        transition={{
                            type: "smooth",
                            repeatType: "mirror",
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                    <img alt='gradient' className='gradient' src={gradient} />
                </div>
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={handleClosePopup}>&times;</span>
                            <ShareBtn />
                        </div>
                    </div>
                )}
            </div>
    )
}

export default MainComponent