import React from "react";
import { Collapse } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";

//import CSS
import './roadmapitem.css';
class RoadMapItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render () {
        return (
            <div>
                <div onClick={() => {this.setState({open: !this.state.open})}}
                    aria-controls='example'
                    aria-expanded={this.state.open}
                    className='collapse-header-control' >
                    <div className='collapse-header'>
                        <p>{this.props.title}</p>
                    </div>
                    <BsPlusLg />
                </div>
                <Collapse in={this.state.open}>
                    <div id="example" className='collapse-content'>
                        <p>{this.props.content}</p>
                        <p>{this.props.content2}</p>
                        <p>{this.props.content3}</p>
                        <p>{this.props.content4}</p>
                        <p>{this.props.content5}</p>
                        <p>{this.props.content6}</p>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default RoadMapItem;