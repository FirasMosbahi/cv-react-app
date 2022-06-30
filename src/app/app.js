import React from "react"
import Card from "./card"
import info from "./info";
import {GrCaretNext , GrCaretPrevious} from 'react-icons/gr'
import "./app.css"
import {BsPersonFill} from "react-icons/bs";
import {AiFillContacts} from "react-icons/ai";
import {GiSkills} from "react-icons/gi";
import {FaLanguage, FaReact} from "react-icons/fa";
import {DiJava} from "react-icons/di";
import "./nav.css"

export default function App(){
    let [infoNum , setInfoNum] = React.useState(0)
    function clickNext(){
        setInfoNum(prevState => {
            if (prevState === 5){
                return 0
            }
            return prevState+1
        })
    }
    function clickPrev(){
        setInfoNum(prevState => {
            if (prevState === 0){
                return 5
            }
            return prevState-1
        })
    }
    return(
        <div className="app">
            <div className="main">
                <button className="prev" onClick={()=>clickPrev()}><GrCaretPrevious/></button>
                <Card className="cards" name={Object.keys(info)[infoNum]} value={info[Object.keys(info)[infoNum]]}/>
                <button className="next" onClick={()=>clickNext()}><GrCaretNext/></button>
            </div>
            <div className="navs">
                <div className="bar">
                    <button onClick={()=>setInfoNum(0)}><BsPersonFill className="icon1"/></button>
                    <button onClick={()=>setInfoNum(1)}><AiFillContacts className="icon1"/></button>
                    <button onClick={()=>setInfoNum(2)}><GiSkills className="icon1"/></button>
                    <button onClick={()=>setInfoNum(3)}><FaLanguage className="icon1"/></button>
                    <button onClick={()=>setInfoNum(4)}><DiJava className="icon1"/></button>
                    <button onClick={()=>setInfoNum(5)}><FaReact className="icon1"/></button>
                </div>
            </div>
        </div>
    )
}