import React, { Component } from "react";
import { connect } from "react-redux";
import { avance, gol, golRival, turno } from "../action";
import './Dado.css';
import './Tablero.css';
import Remate from "./Remate";
import TiroLibre from "./TiroLibre";
import Penal from "./Penal";
import Corner from "./Corner";
import { Var } from "./var";
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// El dado va a devolver un número random para avanzar en el tablero.
// Ese número va adicionarse al avance del estado actual del casillero

export class Dado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            remate: false,
            tiroLibre: false,
            penal: false,
            corner: false,
            var: false
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

    paseLargo(event){
        event.preventDefault();
        var pase = this.props.casillero + 7;
        this.props.avance(pase);
        this.setState({casillero: pase});
    }

    // El casillero setea a 0 cuando hay lateral
    lateral(event){
        event.preventDefault();
        var lateral = -5;
        this.props.avance(lateral);
        this.setState({casillero: 5});
    }

    pierdePelota(event, numero) {
        event.preventDefault();
        this.props.avance(-numero);
        this.props.turno();
    }

    // gol(event, numero){
    //     event.preventDefault();
    //     this.props.gol(1);
    //     this.props.turno();
    //     this.props.avance(-numero);
        
    // }

    gol = (event, numero) => {
        event.preventDefault();

        if(numero === 10) {
            this.props.gol(1);
            this.props.avance(-numero);
            this.props.turno();
            return;
        }
        this.props.golRival(1);
        this.props.avance(numero);
        this.props.turno();
    }

    remate = () => {
        this.setState({remate: !this.state.remate});
    }

    tiroLibre = () => {
        this.setState({tiroLibre: !this.state.tiroLibre});
    }
    
    penal = () => {
        this.setState({penal: !this.state.penal});
        this.setState({var: false});
    }

    corner = () => {
        this.setState({corner: !this.state.corner});
    }

    var = () => {
        this.setState({var: !this.state.var});
    }

    render() {
        
        const { numero } = this.state;
        //var casillero = Math.abs(this.props.casillero);

        return(
            <div>

                {
                    this.props.casillero ?
                    (
                        // this.props.casillero === 2 ?
                        //     <div><button onClick={(e) => {this.paseLargo(e)}}>Pase largo</button></div> :

                        this.props.casillero === 3 || this.props.casillero === -3 ?
                            <div><button onClick={(e) => {this.pierdePelota(e, 3)}}>Pierde la pelota.</button></div> :

                        this.props.casillero === 4 || this.props.casillero === -4 ?
                            <div><button onClick={this.remate}>Remate de lejos</button></div> :
                            
                        //this.props.casillero === 5 ?
                        //    <div> <button onClick={(e) => {this.lateral(e)}}>Lateral</button></div> :

                        // this.props.casillero === 6 || this.props.casillero === -6 ?
                        //     <div><button onClick={(e) => {this.pierdePelota(e, 6)}}>Pierde la pelota.</button></div> :

                        this.props.casillero === 7 || this.props.casillero === -7 ?
                            <div><button onClick={this.tiroLibre}>Tiro libre</button></div> :

                        this.props.casillero === 8 || this.props.casillero === -8 ?
                            <div><button onClick={this.penal}>Penal</button></div> :

                        this.props.casillero === 9 || this.props.casillero === -9 ?
                            <div><button onClick={(e) => {this.pierdePelota(e, 9)}}>Off side</button></div> :

                        this.props.casillero === 10 ?
                            <div><button onClick={(e) => {this.gol(e, 10)}}>GOOOOOOOOL!!!!!</button></div> :

                        this.props.casillero === -10 ?
                            <div><button onClick={(e) => {this.gol(e, -10)}}>GOOOOOOOOL!!!!!</button></div> :

                        this.props.casillero === 11 || this.props.casillero === -11 ?
                            <div><button onClick={this.corner}>Corner</button></div> :

                        this.props.casillero === 12 || this.props.casillero === -12 ?
                            <div><button onClick={this.var}>VAR, están revisando la jugada!</button></div> :

                        this.props.casillero > 12 &&  this.props.casillero < 19 ?
                            <div><button onClick={(e) => {this.handleSubmit(e)}}>Centro al área!</button></div> :

                        this.props.casillero < -12 &&  this.props.casillero > -19 ?
                            <div><button onClick={(e) => {this.handleSubmit(e)}}>Centro al área!</button></div> :

                        <button id="tirarDado" onClick={(e) => {this.handleSubmit(e)}}>Tirar dado</button>
                    )  
                    :
                    (
                        <button id="tirarDado" onClick={(e) => {this.handleSubmit(e)}}>Tirar dado</button>
                    )
                }

                {
                        numero ?
                        (
                            numero === 1 ?
                            <div><img src='relampago-jdf/images/1.gif' alt="dado1"/></div> :
                            numero === 2 ?
                            <div><img src='relampago-jdf/images/2.gif' alt="dado2"/></div> :
                            numero === 3 ?
                            <div><img src='relampago-jdf/images/3.gif' alt="dado3"/></div> :
                            numero === 4 ?
                            <div><img src='relampago-jdf/images/4.gif' alt="dado4"/></div> :
                            numero === 5 ?
                            <div><img src='relampago-jdf/images/5.gif' alt="dado5"/></div> :
                            numero === 6 ?
                            <div><img src='relampago-jdf/images/6.gif' alt="dado6"/></div> :
                            <div><p></p></div>
                        )
                        :
                        (
                            <div><button onClick={this.var}>VAR</button></div>
                        )
                }

                {/* Remate de lejos */}
                <Modal isOpen={this.state.remate}>
                    <ModalHeader>Remate de lejos</ModalHeader>
                    <ModalBody><Remate/></ModalBody>
                    <ModalFooter><button onClick={this.remate}>Cerrar</button></ModalFooter>
                </Modal>
                
                {/* Tiro libre */}
                <Modal isOpen={this.state.tiroLibre}>
                    <ModalHeader>Tiro Libre</ModalHeader>
                    <ModalBody><TiroLibre/></ModalBody>
                    <ModalFooter><button onClick={this.tiroLibre}>Cerrar</button></ModalFooter>
                </Modal>

                {/* Penal */}
                <Modal isOpen={this.state.penal}>
                    <ModalHeader>Penal</ModalHeader>
                    <ModalBody><Penal/></ModalBody>
                    <ModalFooter><button onClick={this.penal}>Cerrar</button></ModalFooter>
                </Modal>

                {/* Corner */}
                <Modal isOpen={this.state.corner}>
                    <ModalHeader>Corner</ModalHeader>
                    <ModalBody><Corner/></ModalBody>
                    <ModalFooter><button onClick={this.corner}>Cerrar</button></ModalFooter>
                </Modal>

                {/* VAR */}
                <Modal isOpen={this.state.var}>
                    <ModalHeader>VAR: revisión de jugada</ModalHeader>
                    <ModalBody><Var/></ModalBody>
                    <ModalFooter><button onClick={this.var}>Cerrar</button></ModalFooter>
                </Modal>
                
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
//         ficha: numero => dispatch(avance)
//     };
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Dado);

export default connect(mapStateToProps, { avance, gol, golRival, turno }) (Dado);

