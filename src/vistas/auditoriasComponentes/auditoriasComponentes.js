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
import Button from '@material-ui/core/Button';
//Estilos
import Style from "../../assets/vistasStyle/auditoriaComponentesStyles";
//iconos
import Assignment from '@material-ui/icons/Assignment';

import AuditoriasComponentesItems from '../auditoriasComponentes/auditoriasComponentesItems'


class AuditoriasComponentes extends Component {
    constructor() {
        super();
        this.state = { itemsAuditoriasComponentes: []};
    }

    /**
     * @description Funciónm de concurrencia del render cuando hace llamados al API.
     */
    _renderCurrencies() {
        const { itemsAuditoriasComponentes } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.tableResponsive}>
                <form className={classes.container} onSubmit={this.handleSubmit}>
                    <Button
                        className={classes.button}
                        onClick={this.consultaAuditorias}
                        size="small"
                    >
                        Consultar
                    </Button>
                    <Button
                        className={classes.button}
                        size="small"
                    >
                        Crear Auditoria
                    </Button>
                    <Badge  color="secondary" badgeContent={itemsAuditoriasComponentes.length} className={classes.margin}>
                        <Paper>
                                <Assignment className={classes.configIconoAC} /> 
                        </Paper>
                    </Badge>
                </form>
                <Paper  >
                    
                    <Table>
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