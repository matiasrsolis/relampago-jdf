import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, golRival, turno } from "../action";



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
        var casillero = Math.abs(this.props.casillero);

        this.setState({numero: numDado});

        if(numDado === 3 && this.props.turnoMio === false){
            this.props.golRival(1);
            this.props.turno();
            this.props.avance(-casillero);
            return;
        }
        if(numDado === 3 && this.props.turnoMio === true){
            this.props.gol(1);
            this.props.turno();
            this.props.avance(-casillero);
            return;
        }
        this.props.turno();
        this.props.avance(-casillero);
        
        
    }


        

    // }

    render() {
        const { numero } = this.state;
        
        return(
            <div>
                {
                    numero ?
                    (
                        numero !== 3 ?
                        <div>
                            <img src={`relampago-jdf/images/${numero}.gif`} alt="dado1"/>
                            <p id="tiro-libre1">Afuera.</p>
                        </div>
                        :
                        <div>
                            <img src='relampago-jdf/images/3.gif' alt="dado3"/>
                            <p id="tiro-libre1">GOOOOOOOOL!!!!!</p>
                            {/* { !this.props.turno ? ( this.props.golRival(1) ) : ( this.props.gol(1) ) } */}

                        </div>
                    ) : (
                        <button onClick={(e) => {this.handleSubmit(e)}}>Tirá el dado para ejecutar el tiro libre</button>
                    )
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        casillero: state.casillero,
        turnoMio: state.turno
    };
}

export default connect(mapStateToProps, { avance, gol, golRival, turno }) (TiroLibre);

