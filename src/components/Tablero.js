import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, turno } from "../action";
import Dado from "./Dado";
import TiroLibre from "./TiroLibre";

// En tablero además de mostrarse los casilleros y el avance de la ficha,
// se establecen los significados de cada casillero

export class Tablero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0
        };
    }



    render() {

        return(

            <div>

                <div><Dado /></div>

                <p>Ahora estás en el casillero <span style={{fontSize: '2em', fontWeight: '700'}}>{this.props.casillero}</span></p>

                {
                    this.props.casillero ?
                    (
                        this.props.casillero === 1 || this.props.casillero === -1 ?
                            <div>
                                <p>Maneja la pelota.</p>
                            </div> :
                        this.props.casillero === 2 || this.props.casillero === -2 ?
                            <div>
                                <p>Pase largo.</p>
                            </div> :
                        this.props.casillero === 3 || this.props.casillero === 6 || this.props.casillero === -3 || this.props.casillero === -6 ?
                            <div>
                                <p>Pierde la pelota.</p>
                            </div> :
                        this.props.casillero === 4 || this.props.casillero === -4 ?
                            <div>
                                <button onClick={(e) => {this.handleSubmit(e)}}>Remate de lejos.</button>  {/* -- Remate --*/}
                            </div> :
                        this.props.casillero === 5 || this.props.casillero === -5 ?
                            <div>
                                <p>Lateral.</p>
                            </div> :
                        this.props.casillero === 7 || this.props.casillero === -7 ?
                            <div>
                                <p>Tiro libre!</p>
                            </div> :
                        this.props.casillero === 8 || this.props.casillero === -8 ?
                            <div>
                                <p>PENAL!!</p>      {/* -- Penal -- */}
                            </div> :
                        this.props.casillero === 9 || this.props.casillero === -9 ?
                            <div>
                                <p>Off side.</p>
                            </div> :
                        this.props.casillero === 10 || this.props.casillero === -10 ?
                            <div>
                                 <p>GOOOOOOOOL!!!!</p> 
                            </div> :
                        this.props.casillero === 11 || this.props.casillero === -11 ?
                            <div>
                                <p>Corner.</p>  {/* -- Corner -- */}
                            </div> :
                        this.props.casillero === 12 || this.props.casillero === -12 ?
                            <div>
                                <p>VAR, están revisando.</p>
                            </div> :
                        this.props.casillero > 12 &&  this.props.casillero < 19 ?
                            <div>
                                <p>Centro al área.</p>  {/* -- Centro -- */}
                            </div> :
                        this.props.casillero > -19 &&  this.props.casillero < -12 ?
                            <div>
                                <p>Centro al área.</p>  {/* -- Centro -- */}
                            </div> :
                        <div>
                            <p>La pelota se va lejos. Saque de arco.</p>
                        </div>
                    )
                    :
                    (
                        <p></p>
                    )
                }

                <div>
                    <TiroLibre />
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

export default connect(mapStateToProps, { avance, gol, turno }) (Tablero);