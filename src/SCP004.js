import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import scpData from "./scpdata.json";

const scp = scpData.map(
    (scpData) => {
        return(
            <div className="card mt-2 mb-2 bg-dark text-light">
                <h1 className="card-header">{scpData.scpItem[2].scpNumber}</h1>
                <div className="card-body bg-light text-dark">
                    <h2 className="card-title">Item #{scpData.scpItem[2].scpNumber}</h2>
                    <h3>Object Class: {scpData.scpItem[2].scpObjectClass}</h3>
                    <h4>Special Contrainment Procedures</h4>
                    <p className="card-text">{scpData.scpItem[2].scpSCP.map((item) =>{return <p>{item}</p>})}</p>
                    <h4>Description</h4>
                    <p className="card-text">{scpData.scpItem[2].scpDescription[0]}<span className="text-danger">{scpData.scpItem[2].scpDescription[1]}</span>{scpData.scpItem[2].scpDescription[2]}</p>
                    <img className="big-image" src={scpData.scpItem[2].image}/>
                </div>
            </div>
        );
    }
)


class SCP004 extends Component{
    render(){
        return(
            <div>
                {scp}
            </div>
        );
    }
}
export default SCP004;