import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//import CSS


import myPic from "../../assets/CenterPic.png";

import './footer.css';
import Logo from '../../assets/logo.jpg'
//import social icons
import {
    BsTwitter,
    BsDiscord,
    BsInstagram
} from 'react-icons/bs';

function onMintClick() {
    document.getElementById("mint").scrollIntoView();
}
function onHomeClick() {
    document.getElementById("home").scrollIntoView();
}
function onWhiteClick() {
    window.location.href = "https://whitepaper.powerplantsnft.com/"
}
function onGalleryClick() {
    window.location.href = "https://gallery.powerplantsnft.com/"
}
function onShopClick() {
    window.location.href = "https://shop.powerplantsnft.com/";
}
function onOpenSeaClick() {
    window.open("https://opensea.io/");
}
class Footer extends React.Component {

    render() {
        return (
            <div className='footer-control' id="socials">
                <Container className='footer'>
                    <Row style={{ width: "100%", paddingBottom: 20 }}>
                        <Col md="3" className="footer-logo-container" style={{}}>
                            {/* <h3>Power Plants</h3> */}
                            <img className="footer-logo" src={myPic} alt="" />
                        </Col>
                        <Col md="3" style={{ margin: "auto" }} >
                            <div style={{ display: "flex", textAlign: "center", justifyContent: "center", padding: "0em" }}>
                                <text className="mint-button" onClick={onMintClick} >MINT</text>
                            </div>
                        </Col>
                        {/* <Col md="3" className="footer-nav-container">
                            <p className="footer-nav" onClick={onHomeClick}>Home</p>
                            <p className="footer-nav" onClick={onWhiteClick}>Roadmap</p>
                            <p className="footer-nav" onClick={onGalleryClick}>Team</p>
                            <p className="footer-nav" onClick={onShopClick}>Shop</p>
                            <p className="footer-nav" onClick={onOpenSeaClick}>OpenSea</p>
                        </Col> */}
                        <Col md="3" className="footer-social">
                            <p className="footer-social-title">Connect with us on Social Media</p>
                            <div className="social-button-container">
                                <a className="social-button" href="http://discord.gg/">
                                    <img src="https://static.wixstatic.com/media/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.webp" alt="" />
                                </a>
                                <a className="social-button" href="https://twitter.com/">
                                    <img src="https://static.wixstatic.com/media/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.webp" alt="" />
                                </a>
                                <a className="social-button" href="http://instagram.com/">
                                    <img src="https://static.wixstatic.com/media/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.webp" alt="" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    {/* <p className="hidden">&copy;2021 &nbsp; PowerPlants</p>
                    <div> */}
                    {/* <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://instagram.com/"> <BsInstagram size={32} /></a>
                       <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://twitter.com/"> <BsTwitter size={32} /></a>
                       <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://discord.com/"> <BsDiscord size={32} />   </a>      */}
                    {/* <p style={{fontSize: 15}}><a target="_blank" rel="noopener noreferrer" href="https://metaversesolutions.ai/" style={{textDecoration: "none", color:"white", textAlign: "right"}}>Website by Metaverse Solutions, LLC</a></p>
                    </div> */}
                </Container>
            </div>
        );
    }
}

export default Footer;