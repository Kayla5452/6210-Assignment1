import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import scpData from "./scpdata.json";

const scp = scpData.map(
    (scpData) => {
        return(
            <div className="card mt-2 mb-2 bg-dark text-light">
                <h1 className="card-header">{scpData.scpItem[3].scpNumber}</h1>
                <div className="card-body bg-light text-dark">
                    <h2 className="card-title">Item #{scpData.scpItem[3].scpNumber}</h2>
                    <h3>Object Class: {scpData.scpItem[3].scpObjectClass}</h3>
                    <h4>Special Contrainment Procedures</h4>
                    <p className="card-text">{scpData.scpItem[3].scpSCP}</p>
                    <h4>Description</h4>
                    <p className="card-text">{scpData.scpItem[3].scpDescription}</p>
                    <img className="small-image" src={scpData.scpItem[3].image}/>
                </div>
            </div>
        );
    }
)


class SCP005 extends Component{
    render(){
        return(
            <div>
                {scp}
            </div>
        );
    }
}
export default SCP005;