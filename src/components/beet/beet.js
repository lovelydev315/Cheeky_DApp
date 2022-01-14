import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import ImageBoy1 from '../../assets/a.png';
import ImageBoy2 from '../../assets/b.png';
import ImageBoy3 from '../../assets/c.png';
import ImageBoy4 from '../../assets/d.png';
import ImageBoy5 from '../../assets/e.png';
import ImageBoy6 from '../../assets/f.png';
import ImageBoy7 from '../../assets/g.png';

//import CSS
import './beet.css';

import {
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
class beet extends React.Component {
    render() {

        return (
            <div className='beet-control' id="team">
                <Container>
                    <header style={{ textAlign: "center", color: "white" }}>
                        <br /> <span style={{ fontStyle: "normal" }}>TEAM MEMBERS</span>
                    </header>
                </Container>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            },
                        },
                    ]}
                    dots={false}
                    arrows={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <div>
                        <img className="caroImg" src={ImageBoy1} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy2} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy3} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy4} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy5} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy6} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy7} alt='boy2' />
                    </div>





                </InfiniteCarousel>

                {/* <Container>
                    <div className='slide-arrows'>
                        <a>
                            <BsArrowLeftShort size={40} />
                        </a>
                        <a>
                            <BsArrowRightShort size={40} />
                        </a>
                    </div>
                </Container> */}
                {/* <Container>
                    <div className='remaining'>
                        <span>0</span>
                        <p>SPOOKIES REMAINING</p>
                    </div>
                </Container> */}
            </div>

        );
    }
}

export default beet;