import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';
// import NewRoadMap from '../newroadmap/newroadmap';
import asdf from "../../assets/asdf.png"

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '0%',
                    title: "What are Cheeky Chimps?",
                    content: "Cheeky Chimps are 10,000 ultra rare and algorithmically generated 3D NFTs, each with unique traits and perks. Owning a Cheeky Chimp grants you access to the Cheeky Chimps Club which will be unlocked shortly after our launch."
                },
                {
                    tag: '20%',
                    title: "What is the Cheeky Chimps Club?",
                    content: "The Cheeky Chimps Club will give Cheeky Chimp owners not only access to exclusive games and events but also a share in the profits. Release date will be shortly after our launch. This is rather official, with our own gaming license and games which have been built over a 9 month period. We are also launching an added referral and bonus system based on your Cheeky Chimps Trait Rarity Cheek-o-meter %… the rarer your Cheeky Chimp, the higher your bonuses."
                },
                {
                    tag: '30%',
                    title: "How Can I Buy a Cheeky Chimp?",
                    content: "As soon as minting commences, simply connect your wallet and click on the “MINT” button. Follow the prompted instructions and away you gooooo!"
                },
                {
                    tag: '40%',
                    title: "How Much are the Cheeky Chimps? When Can I Buy One?",
                    content: "The Cheeky Chimps mint price will be announced closer to launch date due to current major price fluctuations (we want to stay fair). (Super important to follow our social channels for exact times and price confirmation.)"
                },
                {
                    tag: '60%',
                    title: "Is There a Maximum Number of Chimps I Can Buy?",
                    content: "We will be limiting people to 12 Cheeky Chimps per transaction."
                },
                {
                    tag: '80%',
                    title: "Can I Buy on My Mobile?",
                    content: "You can use Metamask to mint on either your mobile, tablet or computer."
                },
                {
                    tag: '100%',
                    title: "Will There Be a Secondary Market?",
                    content: "We will be listing on OpenSea once we go live and our Cheeky Chimps will be revealed 72 hours after the public mint closes."
                },
                {
                    tag: '100%',
                    title: "Will There Be a Community Fund?",
                    content: "We will be placing 10% of our total sales and secondary market royalties into our community fund. We have some big plans so these number will be adjusted as we grow as we all know Cheeky Chimps need to be kept amused!"
                },
                {
                    tag: '100%',
                    title: "Do I Own the Cheeky Chimp After Minting?",
                    content: "As soon as you mint your Cheeky Chimp(s), full intellectual properties are given to you."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ paddingTop: 50, paddingBottom: 50 }}>
                <Container style={{ backgroundColor: "black", padding: 30, border: "solid black 20px", borderRadius: 20, textAlign: "left", maxWidth: 700 }}>
                    <header style={{ fontWeight: 900, color: "white", textAlign: "center" }}>FAQ</header>
                    
                    <Row style={{ paddingTop: 0}}>
                        <Col style={{ color: "white"}}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                            content2={item.content2}
                                            content3={item.content3}
                                            content4={item.content4}
                                            content5={item.content5}
                                            content6={item.content6}
                                        />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                    {/* <br />
                    <br /> */}
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20, width: "40%", height: "40%"}}src={asdf} /> */}
                    {/* <NewRoadMap /> */}
                </Container>
            </div>

        );
    }
}

export default RoadMap;