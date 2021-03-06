import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, golRival, turno } from "../action";
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

        let classname = 'turno';

        if (this.props.currentTurno){
            classname += 'Activo';
        } else {
            classname += 'Inactivo';
        }

        return(

            

            <div>

                <div classname="marcador">
                    <p id="tableroNosotros">Nosotros: <span style={{fontSize: '2em', fontWeight: '700'}}>{this.props.goles}</span></p>
                    <p id="tableroRival">Rival: <span style={{fontSize: '2em', fontWeight: '700'}}>{this.props.golesRival}</span></p>
                </div>
                

                <div className="contentCancha">

                    <picture>
                        <source srcset="relampago-jdf/images/cancha-mobile.jpg" media="(max-width: 736px)" />
                        <img src="relampago-jdf/images/cancha.jpg" alt="cancha"/>
                    </picture>

                    <div id="ficha" className={`f${this.props.casillero}`} ref={this.ficha} >
                        <div className={classname}></div>
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
        casillero: state.casillero,
        goles: state.gol,
        golesRival: state.golRival,
        currentTurno: state.turno
    };
}

export default connect(mapStateToProps, { avance, gol, golRival, turno }) (Tablero);