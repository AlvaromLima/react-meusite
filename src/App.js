//Aplicando States
import React, { Component } from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Matheus',
            contador: 0
        };

        // bind para que o state possa ser acessad
        this.aumentar = this.aumentar.bind(this); 
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome='Alvaro';

        this.setState({state})  // Alterar o state
    }

    diminuir(){
        let state = this.state;
        if (state.contador === 0 ){
            alert("Opa, chegou a zero!");
            return;
        }

        state.contador -= 1;
        state.nome='Matheus';
        this.setState({state})
    }

    render(){
        return(
            //obrigado ter o <div> senão dá erro
            <div>
                <h2>Olá sou o(a) {this.state.nome}</h2>
                <h1>Contador</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                        {this.state.contador}
                    <button onClick={this.aumentar}>+</button>    
                </h3>
            </div>
        );
    }
}

export default App;

