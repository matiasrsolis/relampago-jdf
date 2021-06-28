import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, turno } from "../action";
import { NavLink } from 'react-router-dom';


export class TiroLibre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0
        };
    }

    handleChange(event) {
        this.setState({ numero: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var numDado = Math.floor(Math.random() * (7 - 1)) + 1;
        this.setState({numero: numDado});
    }

    jugada(event, numDado) {
        event.preventDefault();
        if( numDado === 3 ){
            this.props.gol(1);
            !this.props.turno ? this.props.turno(true) : this.props.turno(false);
            this.props.avance(-numDado); //Chequear si turno es falso
        }
        this.props.turno ? this.props.turno(false) : this.props.turno(true);
        this.props.avance(-numDado);
        //setTimeout( function() {window.location.href = "/";}, 2000);
    }

    render() {
        const { numero } = this.state;
        return(
            <div>
                <div>
                    <h1>Tiro Libre</h1>
                    <div>
                        <button onClick={(e) => {this.handleSubmit(e)}}>
                            Tirá el dado para ejecutar el tiro libre
                        </button>
                        {
                                numero ?
                                (
                                    numero === 1 ?
                                    <div>
                                        <img src='relampago-jdf/images/1.gif' alt="dado1"/>
                                        <p id="tiro-libre1">Afuera.</p>
                                        <div><NavLink to="/" >Saque de arco</NavLink></div>
                                        <div><button onClick={(e) => {this.jugada(e, numero)}}>Saca de arco</button></div>
                                    </div> :
                                    numero === 2 ?
                                    <div>
                                        <img src='relampago-jdf/images/2.gif' alt="dado2"/>
                                        <p>Pelota del arquero</p>
                                        <div><NavLink to="/" >Saque de arco</NavLink></div>
                                        <div><button onClick={(e) => {this.jugada(e, numero)}}>Saca del fondo</button></div>
                                    </div> :
                                    numero === 3 ?
                                    <div>
                                        <img src='relampago-jdf/images/3.gif' alt="dado3"/>
                                        <p>GOOOOOOOOL!!!!</p>
                                        <div><NavLink to="/" >Saca del medio</NavLink></div>
                                        <div><button onClick={(e) => {this.jugada(e, numero)}}>Saca del medio</button></div>
                                    </div> :
                                    numero === 4 ?
                                    <div>
                                        <img src='relampago-jdf/images/4.gif' alt="dado4"/>
                                        <p>Afuera</p>
                                        <div><NavLink to="/" >Saque de arco</NavLink></div>
                                        <div><button onClick={(e) => {this.jugada(e, numero)}}>Saca de arco</button></div>
                                    </div> :
                                    numero === 5 ?
                                    <div>
                                        <img src='relampago-jdf/images/5.gif' alt="dado5"/>
                                        <p>Pelota del arquero</p>
                                        <div><NavLink to="/" >Saque de arco</NavLink></div>
                                        <div><button onClick={(e) => {this.jugada(e, numero)}}>Sale del fondo</button></div>
                                    </div> :
                                    numero === 6 ?
                                    <div>
                                        <img src='relampago-jdf/images/6.gif' alt="dado6"/>
                                        <p>Pelota del arquero</p>
                                        <div><NavLink to="/" >Saque de arco</NavLink></div>
                                        <div><button onClick={(e) => {this.jugada(e, numero)}}>Saque de arco</button></div>
                                    </div> :
                                    <div><p></p></div>
                                )
                                :
                                (
                                    
                                    <h2>Tirá el dado para ejecutar el tiro libre.</h2>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        casillero: state.casillero
    };
}

export default connect(mapStateToProps, { avance, gol, turno }) (TiroLibre);

