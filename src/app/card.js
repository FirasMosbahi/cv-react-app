import React from "react"
import Information from "./information"
import img from "./img.jpg"
import "./card.css"

export default function Card(props){
    return(
        <div className="card">
            <img alt="profile cv owner" src={img}/>
            <div className="informations">
                <div className="title">{props.name}</div>
                <div className="content">
                    <Information info={props.value} />
                </div>
            </div>
        </div>
    )
}