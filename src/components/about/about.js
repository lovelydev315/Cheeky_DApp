import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/chimpy.png";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div className="about-control" style={{border: "solid black 20px"}}>
        <Container style={{ border: "solid #7E7E7F 0xp", paddingLeft: 100, paddingRight: 100, textAlign: "left"}}>
          <Row>
            <Col md={6} xs={12} className="about-description">
              <header className="about-title">
                UTILITY
              </header>
              <p style={{ paddingTop: "2em" }}>
                <text className="about-text" style={{ color: "white", textAlign: "left", fontFamily: "newThing" }}>
                  Minting a Cheeky Chimp not only gives you exclusive access to
                  the underground world known as the Cheeky Chimps Club… you
                  will actually own your very own piece of it! <br /><br />
                  So now you may ask… what is the Cheeky Chimps Club?
                  <br /><br />
                  Located 357 floors below ground is a secret world of gambling,
                  crazy events and mischievousness like you’ve never seen
                  before.
                  <br /><br />
                  Having just secured our very own gaming license means that
                  owning a unique and ultra-rare 3D Cheeky Chimp, provides you a
                  stake of the profits for as long as you retain ownership.
                  <br /><br />
                  As an added bonus, your Cheeky Chimp’s rarity scale will also
                  unlock an incentivized referral system and bonus game play.
                  <br />
                </text>
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 0px", borderRadius: 0 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
