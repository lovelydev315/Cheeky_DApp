import React from "react";

import "./state.css"
import StateCard from "./stateCard";
class State extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    title:"0.03 ETH",
                    text:"Price"
                },
                {
                    title:"5K",
                    text:"Collection Size"
                },
                {
                    title:"53",
                    text:"Total Traits"
                },
                {
                    title:"--",
                    text:"Trees Planted"
                },
                {
                    title:"--",
                    text:"$USD Donated"
                }
            ]
        }
    }
    render(){
        console.log(this.state.data);
        return(
            <div className="state_layout">
                {/* <p className="state_title">Wednesday, Dec. 29, 2021, at 2PM EST <br/>DAYS UNTIL MINT</p> */}
                {/* <img style={{marginBottom:50}}src="https://gen.sendtric.com/countdown/xzkekmnaue"/> */}
                
{/*                 
                <div className="state_cards">
                    {
                    this.state.data.map(element=>{
                        return(
                            <div
                            className="state_card">
                                <StateCard 
                                title={element.title}
                                text={element.text}/>
                            </div>
                            )
                    })
                }
                </div> */}
                <div className="state_bg">
                    
                </div>
            </div>
        )
    }
}
export default State;