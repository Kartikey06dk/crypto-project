import React from 'react';
import { FacebookShareButton,
    EmailShareButton, LinkedinShareButton,  TelegramShareButton,
    TwitterShareButton,  WhatsappShareButton} from "react-share";
import {FacebookIcon,   EmailIcon, LinkedinIcon, TelegramIcon, TwitterIcon,
    WhatsappIcon} from 'react-share'
import './styles.css'

const ShareBtn = () => {
    // Replace 'your-actual-url.com' with the URL you want to share.
    const urlToShare = 'https://facebook.com';

    return (
        <div className='share_btns'>
            <FacebookShareButton url={urlToShare}>
                <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <EmailShareButton url={urlToShare}>
                <EmailIcon size={50} round={true} />
            </EmailShareButton>
            <LinkedinShareButton url={urlToShare}>
                <LinkedinIcon size={50} round={true} />
            </LinkedinShareButton>
            <TelegramShareButton url={urlToShare}>
                <TelegramIcon size={50} round={true} />
            </TelegramShareButton>
            <TwitterShareButton url={urlToShare}>
                <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={urlToShare}>
                <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
        </div>
    )
}

export default ShareBtn;