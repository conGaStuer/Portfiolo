import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faMailchimp,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <section id="contact">
      <div className="contact">
        <div className="media fb">
          <a href="https://www.facebook.com/tra.moon.10" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="logos" />
            <span>https://www.facebook.com/tra.moon.10</span>
          </a>
        </div>

        <div className="media insta">
          <a href="https://www.instagram.com/aoyeoaeuh/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="logos" />
            <span>https://www.instagram.com/aoyeoaeuh/</span>
          </a>
        </div>
        <div className="media linkedin">
          <a
            href="        https://www.linkedin.com/in/xunkuong-undefined-42a67824b/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="logos" />
            <span>
              https://www.linkedin.com/in/xunkuong-undefined-42a67824b/
            </span>
          </a>
        </div>
        <div className="media github">
          <a href="https://github.com/conGaStuer/" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="logos" />
            <span>https://github.com/conGaStuer/</span>
          </a>
        </div>

        <div className="media gmail">
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faGoogle} className="logos" />
            <span>xuankhuong1402@gmail.com</span>
          </a>
        </div>
        <div className="media phone">
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faPhone} className="logos" />
            <span>My phone: 085 4219725</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
