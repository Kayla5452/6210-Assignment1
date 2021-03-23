import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div className="card mt-2 bg-dark text-light">
                <h1 className="card-header">About the SCP Foundation</h1>
                <div className="card-body bg-light text-dark">
                    <div className="accordion accordion-flush mb-2" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header btn-light text-dark" id="headingOne">
                            <button className="accordion-button bg-light btn-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                SCP Foundation
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse in bg-light" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body text-dark">
                                    <p>                  
                                        Mankind in its present state has been around for a quarter of a million years, yet only the last 4,000 have been of any significance.<br/><br/>
                                        So, what did we do for nearly 250,000 years? We huddled in caves and around small fires, fearful of the things that we didn't understand. It was more than explaining why the sun came up, it was the mystery of enormous birds with heads of men and rocks that came to life. So we called them 'gods' and 'demons', begged them to spare us, and prayed for salvation.<br/><br/>
                                        In time, their numbers dwindled and ours rose. The world began to make more sense when there were fewer things to fear, yet the unexplained can never truly go away, as if the universe demands the absurd and impossible.<br/><br/>
                                        Mankind must not go back to hiding in fear. No one else will protect us, and we must stand up for ourselves.<br/><br/>
                                        While the rest of mankind dwells in the light, we must stand in the darkness to fight it, contain it, and shield it from the eyes of the public, so that others may live in a sane and normal world.<br/><br/>
                                        We secure. We contain. We protect.
                                        <hr/>
                                        — The Administrator
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="card-title">Mission Statement</h2>
                    <p className="card-text">
                        Operating clandestine and worldwide, the Foundation operates beyond jurisdiction, empowered and entrusted by every major national government with the task of containing anomalous objects, entities, and phenomena. These anomalies pose a significant threat to global security by threatening either physical or psychological harm.<br/><br/>
                        The Foundation operates to maintain normalcy, so that the worldwide civilian population can live and go on with their daily lives without fear, mistrust, or doubt in their personal beliefs, and to maintain human independence from extraterrestrial, extradimensional, and other extranormal influence.<br/><br/>
                        Our mission is three-fold:
                    </p>
                    <h4>Secure</h4>
                    <p className="card-text">
                        The Foundation secures anomalies with the goal of preventing them from falling into the hands of civilian or rival agencies, through extensive observation and surveillance and by acting to intercept such anomalies at the earliest opportunity.
                    </p>
                    <h4>Contain</h4>
                    <p className="card-text">
                    The Foundation contains anomalies with the goal of preventing their influence or effects from spreading, by either relocating, concealing, or dismantling such anomalies or by suppressing or preventing public dissemination of knowledge thereof.
                    </p>
                    <h4>Protect</h4>
                    <p className="card-text">
                    The Foundation protects humanity from the effects of such anomalies as well as the anomalies themselves until such time that they are either fully understood or new theories of science can be devised based on their properties and behavior. The Foundation may also neutralize or destroy anomalies as an option of last resort, if they are determined to be too dangerous to be contained.
                    </p>
                </div>
            </div>
        )
    };
}

export default Home;