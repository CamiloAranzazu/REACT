import React, { Component } from 'react';

let nitBeneficiario = 830053812;
let NitCliente = 891401781;

class App extends Component {
  constructor() {
    super();

    this.state = { items: [] };
  }

  async componentDidMount() {
    const url = "http://localhost:56930/ConceptosCalculadosReglasImp?NitBeneficiario=" + nitBeneficiario + "&NitCliente=" + NitCliente + "";
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    this.setState({ items: data[0] });

    console.log(data);
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Tipo Concepto Calculado</th>
              <th>CCTdescripción</th>
              <th>Tipo Persona</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.items.CRItipoConceptoCalculado}</td>
              <td>{this.state.items.CCTdescripcion}</td>
              <td>{this.state.items.tipoPersona}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
