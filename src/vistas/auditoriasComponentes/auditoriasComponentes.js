import React, { Component } from 'react'
import Titulo from '../../Componentes/bannerTitulos/titulo'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import DialogEliminar from '../../Componentes/Dialogs/DialogEliminar'
//Estilos
import Style from "../../assets/vistasStyle/auditoriaComponentesStyles";


class AuditoriasComponentesItems extends Component {

    

    render() {
        
        const {
            editar,
            fabEliminar,
            iconoEditar,
            Opcion,
            Proyecto,
            Ruta,
            EsquemaComponente,
            NombreComponente,
            TipoComponente,
            Observacion,
        } = this.props;
        return (
            
                <TableRow  >
                    <TableCell padding="none" align="right" >
                        <Tooltip title="Elimiar" placement="left-start">
                            {fabEliminar}
                        </Tooltip>
                    </TableCell>
                    <TableCell padding="none" align="left">
                        <Tooltip title="Editar" placement="right-start">
                            <Fab className={editar} size="small" color="inherit" aria-label="Add" >
                                {iconoEditar}
                            </Fab>
                        </Tooltip>
                    </TableCell>
                    <TableCell padding="none" align="center">{Opcion}</TableCell>
                    <TableCell padding="none" align="center">{Proyecto}</TableCell>
                    <TableCell padding="none" align="center">{Ruta}</TableCell>
                    <TableCell padding="none" align="center">{EsquemaComponente}</TableCell>
                    <TableCell padding="none" align="center">{NombreComponente}</TableCell>
                    <TableCell padding="none" align="center">{TipoComponente}</TableCell>
                    <TableCell padding="none" align="center">{Observacion}</TableCell>
                </TableRow>
        );
    }
}


class AuditoriasComponentes extends Component {
    constructor() {
        super();
        this.state = { itemsAuditoriasComponentes: [], open:false };
    }

    /**
     * @description Funciónm de concurrencia del render cuando hace llamados al API.
     */
    _renderCurrencies() {
        const { itemsAuditoriasComponentes, open } = this.state;
        const { classes } = this.props;
        
        return (
            <div className={classes.tableResponsive}>
                <form className={classes.container} onSubmit={this.handleSubmit}>
                {this.state.open === true ? <DialogEliminar open={open} /> : null} 
                    <Button
                        className={classes.button}
                        size="small"
                        onClick={this.consultaAuditorias}
                    >
                        Consultar
                    </Button>
                    <Button
                        className={classes.button}
                        size="small"
                    >
                        Crear Auditoria
                    </Button>
                    <Badge color="secondary" badgeContent={itemsAuditoriasComponentes.length} className={classes.margin}>
                        <Typography className={classes.padding} >Auditorias</Typography>
                    </Badge>
                </form>
                <Paper  >
                    <Table >
                        <TableHead >
                            <TableRow>
                                <TableCell colSpan={2} align="center">Acciones</TableCell>
                                <TableCell padding="none" align="center">Opción</TableCell>
                                <TableCell padding="none" align="center">Proyecto</TableCell>
                                <TableCell padding="none" align="center">Ruta</TableCell>
                                <TableCell padding="none" align="center">Esquema Componente</TableCell>
                                <TableCell padding="none" align="center">Nombre Componente</TableCell>
                                <TableCell padding="none" align="center">Tipo Componente</TableCell>
                                <TableCell padding="none" align="center">Observación</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                itemsAuditoriasComponentes.map((auditorias, index) => {
                                    return (
                                        <AuditoriasComponentesItems
                                            id={auditorias.id}
                                            Opcion={auditorias.Opcion}
                                            key={index}
                                            Proyecto={auditorias.Proyecto}
                                            Ruta={auditorias.Ruta}
                                            EsquemaComponente={auditorias.EsquemaComponente}
                                            NombreComponente={auditorias.NombreComponente}
                                            TipoComponente={auditorias.TipoComponente}
                                            Observacion={auditorias.Observacion}
                                            iconoEditar={<EditIcon style={{ height: "18px" }} />}
                                            eliminar={classes.colorIconoEliminar}
                                            editar={classes.colorIconoEditar}
                                            fabEliminar={<form onSubmit={this.handleSubmit}>
                                                            <Fab  size="small" aria-label="Add" onClick={this.activarDialog} >
                                                                <DeleteIcon style={{ height: "18px" }} />
                                                            </Fab>
                                                        </form>}
                                        />
                                    )
                                })

                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
    activarDialog = () => {
        this.setState({open: true})
    }

    consultaAuditorias = () => {
        fetch('http://localhost:56930/api/AuditoriaComponentes')
            .then(res => res.json())
            .then(data => {
                const itemsAuditoriasComponentes = data;
                this.setState({ itemsAuditoriasComponentes });

            });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Titulo titulo="Auditorias Componentes" />
                <main className={classes.content}>
                    {this._renderCurrencies()}
                </main>
            </div>
        )
    }
}

export default withStyles(Style)(AuditoriasComponentes);