import React from 'react'
import footerImage from '../../assets/img/footerImg 1.png'
import './Footer.scss'
const Footer = () => {
  return (
    <>
      <div className="image-section">
        <img src={footerImage}alt='footer-map' />
      </div>
        <div className="adress-section">
            <div className="adress-header">
            İletişim
            </div>
            <div className="adress-text">
            Adres: Yücetepe, Akdeniz Cd. No:31, 06570 Çankaya/Ankara
            </div>
            <div className="adress-contact">
            Email: bilgi@bilgi.com
            </div>
        </div>
      <div className="map-section">
        <iframe
          className="iframe-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.734007533403!2d32.83513771563813!3d39.92496839332335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1sen!2str!4v1675346280739!5m2!1sen!2str"
          style={{ border: '0' }}
          title='map'
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
}
export default Footer



