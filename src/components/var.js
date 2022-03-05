import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, golRival, turno, sacaMedio } from "../action";



export class Var extends Component {

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
            return;
        }
        this.props.turno();
        this.props.sacaMedio();
    }


        

    // }

    render() {
        const { numero } = this.state;
        
        return(
            <div>
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
                            <p>Otro corner</p>
                            <button onClick={(e) => {this.handleSubmit(e)}}>Ejecutá denuevo el corner</button>
                        </div>
                        :
                        <div>
                            <img src={`relampago-jdf/images/${numero}.gif`} alt="dado1"/>
                            <p>Afuera.</p>
                        </div>
                    ) : (
                        <button onClick={(e) => {this.handleSubmit(e)}}>Tirá el dado para ejecutar el corner</button>
                    )
                }

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

