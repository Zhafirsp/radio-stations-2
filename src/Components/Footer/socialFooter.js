import React, { useState } from "react"
import { BsYoutube, BsInstagram  } from "react-icons/bs";
import { FaFacebookF, FaSpotify, FaTiktok, FaRegCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialFooter = () => {

  return (
    <>
     {/* <h2>Follow Us</h2> */}
        <ul className="col-md-3 d-flex align-items-center list-unstyled icons-footer">
            <li><a href="https://www.instagram.com/ozradiobandung/" target="_blank" className="text-white" aria-label="instagram"><BsInstagram className="instagram"/></a></li>
            <li><a href="https://twitter.com/ozradiobandung?s=20" target="_blank" className="text-white" aria-label="twitter"><FaXTwitter className="twitter"/></a></li>
            <li><a href="https://www.youtube.com/@OZRADIO" target="_blank" className="text-white" aria-label="youtube"><BsYoutube className="youtube"/></a></li>
            <li><a href="https://open.spotify.com/show/24P703f8q8xHnqOn6MCrPO?si=7861e36e3c264fe3&nd=1&dlsi=20c956f09a774cff" target="_blank" className="text-white" aria-label="spotify"><FaSpotify className="spotify"/></a></li>
            <li><a href="https://www.facebook.com/ozradiobandung" target="_blank" className="text-white" aria-label="facebook"><FaFacebookF className="facebook"/></a></li>
            <li><a href="https://www.tiktok.com/@ozradio?lang=en" target="_blank" className="text-white" aria-label="tiktok"><FaTiktok  className="tiktok"/></a></li>
          </ul>
    </>
  )
}

export default SocialFooter