import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, turno } from "../action";
import Dado from "./Dado";
import './Tablero.css';

// En tablero además de mostrarse los casilleros y el avance de la ficha,
// se establecen los significados de cada casillero

export class Tablero extends Component {

    constructor(props) {
        super(props);
        this.ficha = React.createRef();
        this.state = {
            numero: 0
        };
    }

    

    render() {

        return(

            <div>

                <p>Nº de casillero: <span style={{fontSize: '2em', fontWeight: '700'}}>{this.props.casillero}</span></p>

                <div className="contentCancha">

                    <picture>
                        <source srcset="relampago-jdf/images/cancha-mobile.jpg" media="(max-width: 736px)" />
                        <img src="relampago-jdf/images/cancha.jpg" alt="cancha"/>
                    </picture>

                    <div id="ficha" className={`f${this.props.casillero}`} ref={this.ficha} >
                        <div></div>
                    </div>

                </div>

                <aside>
                    <Dado/>
                </aside>

                

                
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