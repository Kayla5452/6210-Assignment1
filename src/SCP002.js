import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import scpData from "./scpdata.json";

const scp = scpData.map(
    (scpData) => {
        return(
            <div className="card mt-2 mb-2">
                <h1 className="card-header">{scpData.scpItem[0].scpNumber}</h1>
                <div className="card-body">
                    <h2 className="card-title">Item #{scpData.scpItem[0].scpNumber}</h2>
                    <h3>Object Class: {scpData.scpItem[0].scpObjectClass}</h3>
                    <h4>Special Contrainment Procedures</h4>
                    <p className="card-text">{scpData.scpItem[0].scpSCP.map((item) =>{return <p>{item}</p>})}</p>
                    <h4>Description</h4>
                    <p className="card-text">{scpData.scpItem[0].scpDescription.map((item) =>{return <p>{item}</p>})}</p>
                </div>
            </div>
        );
    }
)


class SCP002 extends Component{
    render(){
        return(
            <div>
                {scp}
            </div>
        );
    }
}
export default SCP002;