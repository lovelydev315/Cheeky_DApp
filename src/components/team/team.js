import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import CEOImage from '../../assets/CenterPic.png';
// import CTOImage from '../../assets/team/about.gif';
// import CMOImage from '../../assets/team/about.gif';
// import CFOImage from '../../assets/team/about.gif'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: CEOImage,
                    title: 'Tony Stark without the billions. On the rocks type of guy, chases with green juice for balance.',
                    name: "Muhani, Founder"
                },
                {
                    image: CEOImage,
                    title: 'Self-proclaimed crypto-genius. Jack of all trades. Lover of all things nature.',
                    name: "Thomas, Founder"
                },
                {
                    image: CEOImage,
                    // title: 'Scared of heights but would love to go to space.',
                    // name: "Alexander, Artist"
                },
                {
                    image: CEOImage,
                    // title: 'Firm believer that the earth is flat. Avoids cliffs.',
                    // name: "Emily, Social Media/Outreach"
                }, 
                {
                    image: CEOImage,
                    // title: 'Developer by day, master chef by night.',
                    // name: "Joseph, Developer"
                }
            ]
        }
    }

    render() {
        return (
            <div className='team-control'>
                <Container>
                    <header style={{fontStyle: "normal", color:"white"}}> OUR FAMILY </header>
                    {/* <Row>
                        <Col className="team-control-card" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                    </Row>  */}
                    <Row>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[2].image}
                                title={this.state.teams[2].title}
                                name={this.state.teams[2].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[3].image}
                                title={this.state.teams[3].title}
                                name={this.state.teams[3].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[4].image}
                                title={this.state.teams[4].title}
                                name={this.state.teams[4].name}
                            />
                        </Col>
                    </Row> 
                </Container>
            </div>
        );
    }
}

export default Team