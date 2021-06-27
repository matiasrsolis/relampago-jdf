import React, { Component } from "react";
import { connect } from "react-redux";
import { avance } from "../action";


export class Penal extends Component {

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
        //setTimeout(() => {this.props.avance(numDado);}, 1000);
        this.setState({numero: numDado});

    }

    jugada(numDado) {
        if( numDado === 1 ){
            console.log("Afuera");
        }
        return
    }

    render() {
        const { numero } = this.state;
        return(
            <div>
                <div>
                    <h1>Penal</h1>
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
                                        {setTimeout(() => {this.jugada(numero)}, 1000)}
                                        <p id="tiro-libre1">GOOOOOOOOL!!!!</p>
                                    </div> :
                                    numero === 2 ?
                                    <div>
                                        <img src='relampago-jdf/images/2.gif' alt="dado2"/>
                                        <p>GOOOOOOOOL!!!!</p>
                                    </div> :
                                    numero === 3 ?
                                    <div>
                                        <img src='relampago-jdf/images/3.gif' alt="dado3"/>
                                        <p>Erró!</p>
                                    </div> :
                                    numero === 4 ?
                                    <div>
                                        <img src='relampago-jdf/images/4.gif' alt="dado4"/>
                                        <p>GOOOOOOOOL!!!!</p>
                                    </div> :
                                    numero === 5 ?
                                    <div>
                                        <img src='relampago-jdf/images/5.gif' alt="dado5"/>
                                        <p>GOOOOOOOOL!!!!</p>
                                    </div> :
                                    numero === 6 ?
                                    <div>
                                        <img src='relampago-jdf/images/6.gif' alt="dado6"/>
                                        <p>GOOOOOOOOL!!!!</p>
                                    </div> :
                                    <div><p></p></div>
                                )
                                :
                                (
                                    
                                    <h2>Tirá el dado para ejecutar el penal.</h2>
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

export default connect(mapStateToProps, { avance }) (Penal);