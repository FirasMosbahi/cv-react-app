import React from "react"
import "./information.css"

export default function Information(props){
    if(Array.isArray(props.info)){
        const list = props.info.map(
            (value)=><li className="info-element">*{value}</li>
        )
        return(
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
    const list = Object.keys(props.info).map(
        (key)=><li className="info-element">
            <div className="key">*{key} :</div>
            <div className="value">{props.info[key]}</div>
        </li>
    )
    return(
        <div>
            <ol>
                {list}
            </ol>
        </div>
    )
}