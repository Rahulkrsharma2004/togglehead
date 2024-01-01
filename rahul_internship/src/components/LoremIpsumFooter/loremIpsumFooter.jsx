import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsQuora } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { FaTrainSubway } from "react-icons/fa6";
import './loremIpsumFooter.css'
import footerImage from '../../assets/footerImage.png'

const loremIpsumFooter = () => {
  return (
    <div>
      <div className='footerMainDiv'>
        <img className='footerImage' src={footerImage} alt="" />
        <div className='footerContentDiv'>
          <div className='footerContactUs'>
            <h2>Contact us</h2>
            <p>Address : City Center Bangalore,Karnataka</p>
            <p>Email : rks@gmail.com</p>
            <p>Phone : 1234567890</p>
          </div>
          <div className='footerFollowUs'>
            <h2 style={{ textAlign: "center" }}>Follow us</h2>
            <div className='followIcon'>
              <FaFacebookF />
              <FaLinkedin />
              <FaInstagram />
              <FaTwitter />
              <IoLogoYoutube />
              <BsQuora />
            </div>
          </div>
          <div className='footerHeadOffice'>
            <h2 >Head Office</h2>
            <p><FaMapMarkerAlt /> City Center Bangalore,Karnataka </p>
            <p><CiStopwatch /> City Center Bangalore,Karnataka </p>
            <p><CiStopwatch /> City Center Bangalore,Karnataka</p>
            <p><FaTrainSubway /> Bangluru to Mumbai to Delhi</p>
          </div>
        </div>
      </div>
      <div className='lastFooterDiv'>
        <h4>2024@Created By :- Rahul Kumar</h4>
      </div>
    </div>

  )
}

export default loremIpsumFooter