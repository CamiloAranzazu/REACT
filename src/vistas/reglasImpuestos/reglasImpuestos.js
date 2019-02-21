import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Titulo from '../../Componentes/bannerTitulos/titulo'
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Alertas from '../../Componentes/alert/alert'
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    button: 
    {
        margin: theme.spacing.unit,
        backgroundColor: "#52ab56",
        color: "#FAFAFA",
    },

    container: 
    {
        display: 'flex',
        flexWrap: 'wrap',
    },

    content: 
    {
        padding: theme.spacing.unit * 5,
    },

    textField: 
    {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: 
    {
        marginTop: 16,
    },
    margin: 
    {
        margin: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit,
    },
    padding: 
    {
        padding: `0 ${theme.spacing.unit * 2}px`,
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

        this.state = { itemsReglasImpuestos: [],
                        tipoAlert: 'warning',
                        mensaje: '',
                        open: false
                    };
    }

    /**
     * @description Funciónm de concurrencia del render cuando hace llamados al API.
     */
    _renderCurrencies() {
        const { itemsReglasImpuestos } = this.state;
        const { classes} = this.props;

        return (
            <Paper className={classes.root}>
                <Badge color="secondary" badgeContent={itemsReglasImpuestos.length} className={classes.margin}>
                    <Typography className={classes.padding} >Conceptos</Typography>
                </Badge>
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

    consultarReglasImpuestos =  () => {
        let nitBeneficiario = this.txtNitBeneficiario.value;
        let nitCliente = this.txtNitCliente.value;

        if(nitBeneficiario === '')
        {
            nitBeneficiario = 0;
            nitCliente = 0;
        }else if(!/^[0-9]+$/g.test(nitBeneficiario) ) 
            {
                nitBeneficiario = 0;
                nitCliente = 1;
            }
        
        

        if(nitCliente === '')
        {
            nitBeneficiario = 1;
            nitCliente = 0;
        }else if(!/^[0-9]+$/g.test(nitCliente) ) 
            {
                nitBeneficiario = 1;
                nitCliente = 2;
            }

        fetch('http://localhost:56930/api/ConceptosCalculadosReglasImp?NitBeneficiario=' + nitBeneficiario + '&NitCliente=' + nitCliente + '')
            .then(res => res.json())
            .then(data => {
                const itemsReglasImpuestos = data;
                this.setState({ itemsReglasImpuestos });

                if(itemsReglasImpuestos.length > 0){
                    this.setState( {open: true,
                                    tipoAlert:'success',
                                    mensaje: 'Consulta Exitosa, '+itemsReglasImpuestos.length+' registros',
                    });
                }else
                {
                    this.setState( {open: true,
                                    tipoAlert:'info',
                                    mensaje: 'Es posible que la configuración del Nit del beneficiario o del cliente este mal.',
                    });
                }

                
                if(nitBeneficiario ===0 && nitCliente ===0)
                {
                    this.setState( {open: true,
                                    tipoAlert:'warning',
                                    mensaje: 'Debe ingresar el nit del beneficiario.',
                    });
                }
                if(nitBeneficiario === 0 && nitCliente === 1){
                    this.setState( {open: true,
                                    tipoAlert:'error',
                                    mensaje: 'El campo nit beneficiario debe ser numerico.',
                    });
                }
                if(nitBeneficiario === 1 && nitCliente === 0){
                    this.setState( {open: true,
                                    tipoAlert:'warning',
                                    mensaje: 'Debe ingresar el nit del cliente.',
                    });
                }
                
                if(nitBeneficiario ===1 && nitCliente === 2){
                    this.setState( {open: true,
                                    tipoAlert:'error',
                                    mensaje: 'El campo nit cliente debe ser numerico.',
                    }); 
                }


            });
        
        this.setState({ open: false });
    }
    

    render() {
        const { tipoAlert,
                mensaje ,
                open } = this.state;
        const { classes } = this.props;

        return (
            <div id="pagReglasImpuestos">
                {this.state.open === true ? <Alertas tipoAlert={tipoAlert} mensaje={mensaje} open={open} /> : null}
                <Titulo titulo="Reglas impuestos"/>
                <main className={classes.content}>
                    <form className={classes.container} onSubmit={this.handleSubmit}>
                        
                        <TextField
                            className={classes.textField}
                            id="txtNitBeneficiario"
                            name="Beneficiario"
                            label="Nit beneficiario"
                            margin="dense"
                            required={true}
                            inputRef={inputElement => this.txtNitBeneficiario = inputElement}
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textField}
                            id="txtNitCliente"
                            name="cliente"
                            label="Nit cliente"
                            margin="dense"
                            required={true}
                            inputRef={inputElement => this.txtNitCliente = inputElement}
                            variant="outlined"
                        />
                        <Button
                            className={classes.button}
                            onClick={this.consultarReglasImpuestos }
                            size="small"
                        >
                            Buscar
                        </Button>
                    </form>
                    <br /><br />
                    <div>
                        {this._renderCurrencies()}
                    </div>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(reglasImpuestos);
