import React from 'react';
import { Container } from 'react-bootstrap';
import logo from "../imgs/moose.png";
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="footer pt-5 pb-1" id="footer">
            <Container>
                <div className="row pb-4">
                    {/* About */}
                    <div className="col-xl-4 col-md-4 pb-3 aboutFooter">
                        <div>
                            <h3><img className="logoFooter" src={logo} alt='' /></h3>
                            <p className="infoAbout">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis, mauris vel volutpat vestibulum, velit ipsum ullamcorper libero, ac aliquam tortor purus ac lorem
                                . adipiscing elit. Nulla sagittis, mauris vel </p>
                        </div>
                        <div className="socialFooter  d-flex justify-content-evenly">
                            <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
                            <FontAwesomeIcon className="insta-icon" icon={faInstagram} />
                            <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} />
                        </div>
                    </div>
                    {/* links */}
                    <div className="col-xl-4 col-md-4  linksFooter">
                        <h3 className="titlefooter3">Useful Links</h3>
                        <ul className="listLinks ">
                            <li><a href="#/">Packages</a></li>
                            <li><a href="#/">Why Us</a></li>
                            <li><a href="#/">Hotels</a></li>
                            <li><a href="#/">Popular Destination</a></li>
                        </ul>
                    </div>
                    {/* contact  */}
                    <div className="col-xl-4 col-md-4  contactFooter">
                        <h3 className="titlefooter3">Contact Us</h3>
                        <div className="row mt-4">
                            <FontAwesomeIcon icon={faLocationDot} className="col-2 add-contact" />
                            <p className=" col-8 text-start infoContact ">474 Ahmed Orabi,<br /> New York , US </p>
                        </div>
                        <div className="row mt-3">
                            <FontAwesomeIcon icon={faPhone} className="col-2 add-contact" />
                            <p className="col-8 infoContact text-start">+1234567890</p>
                        </div>
                        <div className="row mt-3">
                            <FontAwesomeIcon icon={faEnvelope} className="col-2 add-contact" />
                            <p className="col-8 text-start infoContact">sheefoo@example.com</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="col-xl-12 col-md-12 pt-3 copyFooter ">
                <p className="text-center">&copy; 2024 <span>Omar Gado</span> , All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer