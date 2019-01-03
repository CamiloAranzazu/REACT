import React, { Component } from 'react';

let nitBeneficiario = 830053812;
let NitCliente = 891401781;

class ReglasImpuestosItem extends Component {
    render() {
        const {
            descripcion,
            tipoConceptoCalculado,
            tipoPersona
        } = this.props;

        return (
            <tr>
                <td>{tipoConceptoCalculado}</td>
                <td>{descripcion}</td>
                <td>{tipoPersona}</td>
            </tr>
        );
    }
}

class reglasImpuestosItems extends Component {
    constructor() {
        super();

        this.state = { itemsReglasImpuestos: [] };
    }

    componentDidMount() {
        fetch('http://localhost:56930/api/ConceptosCalculadosReglasImp?NitBeneficiario=' + nitBeneficiario + '&NitCliente=' + NitCliente + '')
            .then(res => res.json())
            .then(data => {
                const itemsReglasImpuestos = data;
                this.setState({ itemsReglasImpuestos });
            })
    }

    _renderCurrencies() {
        const { itemsReglasImpuestos } = this.state;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tipo concepto calculado</th>
                        <th>Descripción</th>
                        <th>Tipo persona</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemsReglasImpuestos.map((reglaImpuesto, index) => {
                            return (
                                <ReglasImpuestosItem
                                    descripcion={reglaImpuesto.descripcion}
                                    key={index}
                                    tipoConceptoCalculado={reglaImpuesto.tipoConceptoCalculado}
                                    tipoPersona={reglaImpuesto.tipoPersona}
                                />
                            )
                        })

                    }
                </tbody>
            </table>
        )
    }

    render() {
        return this._renderCurrencies();
    }
}

export default reglasImpuestosItems;
