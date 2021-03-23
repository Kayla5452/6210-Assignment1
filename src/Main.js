import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import SCP002 from "./SCP002.js";
import SCP003 from "./SCP003.js";
import SCP004 from "./SCP004.js";
import SCP005 from "./SCP005.js";
import SCP006 from "./SCP006.js";
import Home from "./Home.js";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand">SCP Foundation</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink exact to="/" className="nav-link" aria-current="page">Home</NavLink>
                            <NavLink to="/SCP002" className="nav-link">SCP-002</NavLink>
                            <NavLink to="/SCP003" className="nav-link">SCP-003</NavLink>
                            <NavLink to="/SCP004" className="nav-link">SCP-004</NavLink>
                            <NavLink to="/SCP005" className="nav-link">SCP-005</NavLink>
                            <NavLink to="/SCP006" className="nav-link">SCP-006</NavLink>
                        </div>
                        </div>
                    </div>
                    </nav>
                    {<div className="Container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/SCP002" component={SCP002}/>
                        <Route path="/SCP003" component={SCP003}/>
                        <Route path="/SCP004" component={SCP004}/>
                        <Route path="/SCP005" component={SCP005}/>
                        <Route path="/SCP006" component={SCP006}/>
                    </div>}
                </div>
            </HashRouter>
        );
    }
}


export default Main;