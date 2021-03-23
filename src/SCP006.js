import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import scpData from "./scpdata.json";

const scp = scpData.map(
    (scpData) => {
        return(
            <div className="card mt-2 mb-2 bg-dark text-light">
                <h1 className="card-header">{scpData.scpItem[4].scpNumber}</h1>
                <div className="card-body bg-light text-dark">
                    <h2 className="card-title">Item #{scpData.scpItem[4].scpNumber}</h2>
                    <h3>Object Class: {scpData.scpItem[4].scpObjectClass}</h3>
                    <h4>Special Contrainment Procedures</h4>
                    <p className="card-text">{scpData.scpItem[4].scpSCP[0].nonlist}<br/><br/><ol>{scpData.scpItem[4].scpSCP[1].list.map((item) =>{return <li>{item}</li>})}</ol></p>
                    <h4>Description</h4>
                    <p className="card-text">{scpData.scpItem[4].scpDescription.map((item) =>{return <p>{item}</p>})}</p>
                </div>
            </div>
        );
    }
)


class SCP006 extends Component{
    render(){
        return(
            <div>
                {scp}
            </div>
        );
    }
}
export default SCP006;