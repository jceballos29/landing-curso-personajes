import React from 'react'
import logo from '../images/logo_libel.png'
import { 
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaGooglePlusG,
    FaSkype

 } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="container content">
                <div className="logo">
                    <img alt="Libel Studios Academy" src={logo}/>
                </div>
                <div className="follow">
                    <p>Síguenos</p>
                    <FaFacebookF className="social_network"/>
                    <FaTwitter  className="social_network"/>
                    <FaInstagram  className="social_network" />
                    <FaGooglePlusG className="social_network"/>
                    <FaSkype className="social_network"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
