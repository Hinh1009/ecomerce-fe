import React from "react";
import playstore from "../../../images/playstore.png";
import Appstore from "../../../images/Appstore.png";
import "./styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={Appstore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Hinhwg.98</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a href="https://www.instagram.com/dinhinhwg.98/">Instagram</a>
        <a href="https://github.com/Hinh1009">Github</a>
        <a href="https://www.facebook.com/the.coak.9/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
