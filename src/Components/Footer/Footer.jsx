import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footerContainer">
           <img className="footerImage" src={process.env.PUBLIC_URL + '/Mask-Group.png'} alt="" />
        </div>
    )
}
