import React, { Component } from "react";
import { connect } from "react-redux";
import { avance } from "../action"

// El dado va a devolver un número random para avanzar en el tablero.
// Ese número va adicionarse al estado actual de la ficha 

export class Dado extends Component {
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
        setTimeout(() => {this.props.avance(numDado);}, 1000);
        this.setState({numero: numDado});

    }   
    


    render() {
        
        const { numero } = this.state;
        return(
            <div>
                <p>Click para tirar el dado</p>
                <p>Ahora estás en el casillero <span style={{fontSize: '2em', fontWeight: '700'}}>{this.props.casillero}</span></p>
                <button onClick={(e) => {this.handleSubmit(e)}}>
                    Tirar dado
                </button>
                {
                        numero ?
                        (
                            numero === 1 ?
                            <div><img src='relampago/images/1.gif' alt="dado1"/></div> :
                            numero === 2 ?
                            <div><img src='relampago/images/2.gif' alt="dado2"/></div> :
                            numero === 3 ?
                            <div><img src='relampago/images/3.gif' alt="dado3"/></div> :
                            numero === 4 ?
                            <div><img src='relampago/images/4.gif' alt="dado4"/></div> :
                            numero === 5 ?
                            <div><img src='relampago/images/5.gif' alt="dado5"/></div> :
                            numero === 6 ?
                            <div><img src='relampago/images/6.gif' alt="dado6"/></div> :
                            <div><p></p></div>
                        )
                        :
                        (
                            
                            <h2>Hola, tirá el dado para comenzar</h2>
                        )
                }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        casillero: state.casillero
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         ficha: numero => dispatch(avance(numero))
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Dado);

export default connect(mapStateToProps, { avance }) (Dado);

