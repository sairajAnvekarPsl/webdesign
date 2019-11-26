import React from "react";
import "./style.css";

export default function ContactForm(props) {
  return (
    <div className="footer">
      <div id="lab_social_icon_footer">
        <div className="container">
          <div className="text-center center-block">
            <a href="https://www.facebook.com/aeroCraft" target="_blank">
              <i
                id="social-fb"
                className="fa fa-facebook-square fa-3x social"
              ></i>
            </a>

            <a href="https://www.instagram.com/aero.crafts/" target="_blank">
              <i id="social-gp" className="fa fa-instagram fa-3x social"></i>
            </a>

            <a href="https://www.instagram.com/aero.crafts/" target="_blank">
              <i
                id="social-gp"
                className="fa fa-youtube-square  fa-3x social"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
