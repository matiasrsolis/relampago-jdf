import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, golRival, turno, sacaMedio } from "../action";
import Penal from "./Penal";

import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";



export class Var extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            penal: false
        };
    }

    handleChange(event) {
        this.setState({ numero: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        var numDado = Math.floor(Math.random() * (7 - 1)) + 1;

        this.setState({numero: numDado});

        if(numDado === 4 && this.props.turnoMio === false){
            this.props.golRival(1);
            this.props.turno();
            this.props.sacaMedio();
            return;
        }
        if(numDado === 4 && this.props.turnoMio === true){
            this.props.gol(1);
            this.props.turno();
            this.props.sacaMedio();
            return;
        }
        if(numDado === 3){
            this.props.turno();
            this.props.sacaMedio();
        }
        return;
    }

    penal = () => {
        this.setState({penal: !this.state.penal});
    }

    

        

    // }

    render() {
        const { numero } = this.state;
        
        return(
            <div>
                <p>Con <b>4</b> es GOL!</p>
                <p>Con <b>3</b> no pasó nada.</p>
                <p>Con <b>1, 2, 5 y 6</b> es Penal!</p>
                {
                    numero ?
                    (
                        numero === 4 ?
                        <div>
                            <img src='relampago-jdf/images/4.gif' alt="dado4"/>
                            <p>GOOOOOOOOL!!!!!</p>
                        </div>
                        :
                        numero === 3 ?
                        <div>
                            <img src='relampago-jdf/images/3.gif' alt="dado3"/>
                            <p>No pasó nada.</p>
                            <button onClick={(e) => {this.handleSubmit(e)}}>Siga.</button>
                        </div>
                        :
                        <div>
                            <img src={`relampago-jdf/images/${numero}.gif`} alt="dado1"/>
                            <button onClick={this.penal}>Penal!!</button>
                        </div>
                    ) : (
                        <button onClick={(e) => {this.handleSubmit(e)}}>¿Qué decisión toma el VAR?</button>
                    )
                }

                {/* Penal */}
                <Modal isOpen={this.state.penal}>
                    <ModalHeader>Penal</ModalHeader>
                    <ModalBody><Penal/></ModalBody>
                    <ModalFooter><button onClick={this.penal}>Cerrar</button></ModalFooter>
                </Modal>

            </div>            
        )
    }    
}

function mapStateToProps(state) {
    return {
        currentCasillero: state.casillero,
        turnoMio: state.turno
    };
}

export default connect(mapStateToProps, { avance, gol, golRival, turno, sacaMedio }) (Var);

