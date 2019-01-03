import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Titulo from '../../Componentes/bannerTitulos/titulo'
import Alert from '../../Componentes/alert/alert'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        backgroundColor: "#52ab56",
        color: "#FAFAFA",
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    content: {
        padding: theme.spacing.unit * 5,
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class ReglasImpuestosItem extends Component {
    render() {
        const {
            descripcion,
            tipoConceptoCalculado,
            tipoPersona
        } = this.props;

        return (
            <TableRow>
                <TableCell>{tipoConceptoCalculado}</TableCell>
                <TableCell>{descripcion}</TableCell>
                <TableCell>{tipoPersona}</TableCell>
            </TableRow>
        );
    }
}

class reglasImpuestos extends Component {
    constructor() {
        super();

        this.state = { itemsReglasImpuestos: [] };
    }

    /**
     * @description Funciónm de concurrencia del render cuando hace llamados al API. 
     */
    _renderCurrencies() {
        const { itemsReglasImpuestos } = this.state;
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tipo concepto calculado</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Tipo persona</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
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
                    </TableBody>
                </Table>
            </Paper>
        )
    }

    consultarReglasImpuestos = () => {
        const nitBeneficiario = this.txtNitBeneficiario.value;
        const NitCliente = this.txtNitCliente.value;

        if(nitBeneficiario === ''){
            //this.props.tipoAlert = 'warning';
            //this.props.mensaje = 'Debe ingresar el valor del beneficiario.';
            alert('Debe ingresar el nit del beneficiario.');
            return;
        }else if (!/^[0-9]+$/g.test(nitBeneficiario)) {
            alert('El campo nit beneficiario debe ser numerico.');
            return;
        }

        if(NitCliente === ''){
            //this.props.tipoAlert = 'warning';
            //this.props.mensaje = 'Debe ingresar el valor del beneficiario.';
            alert('Debe ingresar el nit del cliente.');
            return;
        }else if (!/^[0-9]+$/g.test(NitCliente)) {
            alert('El campo nit cliente debe ser numerico.');
            return;
        }

        fetch('http://localhost:56930/api/ConceptosCalculadosReglasImp?NitBeneficiario=' + nitBeneficiario + '&NitCliente=' + NitCliente + '')
            .then(res => res.json())
            .then(data => {
                const itemsReglasImpuestos = data;
                this.setState({ itemsReglasImpuestos });
            });
    }

    render() {
        const { classes, tipoAlert, mensaje, open } = this.props;

        return (
            <div>
                <Alert tipoAlert={tipoAlert} mensaje={mensaje} open={open} />
                <Titulo titulo="Reglas impuestos" />
                <main className={classes.content}>
                    <form className={classes.container} onSubmit={this.handleSubmit}>
                        <TextField
                            className={classes.textField}
                            id="txtNitBeneficiario"
                            label="Nit beneficiario"
                            margin="dense"
                            required={true}
                            inputRef={inputElement => this.txtNitBeneficiario = inputElement}
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textField}
                            id="txtNitCliente"
                            label="Nit cliente"
                            margin="dense"
                            required={true}
                            inputRef={inputElement => this.txtNitCliente = inputElement}
                            variant="outlined"
                        />
                        <Button
                            className={classes.button}
                            onClick={this.consultarReglasImpuestos}
                            size="small"
                            variant="contained"
                        >
                            Buscar
                        </Button>
                    </form>
                    <br />
                    <div>
                        {this._renderCurrencies()}
                    </div>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(reglasImpuestos);
