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
        var numRandom = Math.floor(Math.random() * (7 - 1)) + 1;
        this.props.avance(numRandom);
        console.log("Salió el " + numRandom);
    }

    //avanzaCasillero = (min, max) => {
    //    var numRandom = Math.floor(Math.random() * (max - min)) + min;
    //    var nuevoValor = numRandom + this.props.casillero;
    //    console.log(nuevoValor);
    //}  
    
    


    render() {
        
        const { numero } = this.state;
        return(
            <div>
                <p>Click para tirar el dado</p>
                <p>Ahora estás en el casillero {this.props.casillero}</p>
                <button onClick={(e) => {this.handleSubmit(e)}}>
                    Dado
                </button>
                
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
