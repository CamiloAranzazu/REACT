import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
//Estilos
import Style from "../../assets/vistasStyle/auditoriaComponentesStyles";
//iconos
import Assignment from '@material-ui/icons/Assignment';
//Componentes
import Titulo from '../../Componentes/bannerTitulos/titulo'
import AuditoriasComponentesItems from '../auditoriasComponentes/auditoriasComponentesItems'
import TablePaginationActions from '../../Componentes/TablePaginationActions/tablePaginationActions'

class AuditoriasComponentes extends Component {

    state = { itemsAuditoriasComponentes: [],
            page: 0,
            rowsPerPage: 5,
    };


    handleChangePage = (event, page) => {
    this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value});
    };

    /**
     * @description Funciónm de concurrencia del render cuando hace llamados al API.
     */
    _renderCurrencies() {
        const { itemsAuditoriasComponentes, page, rowsPerPage } = this.state;
        const { classes } = this.props;
        
        return (
           <div className={classes.marginDiv}>             
                <Paper  style={{width: '100%',   overflowX: 'auto' }}  align="center"> 
                    <form className={classes.container} onSubmit={this.handleSubmit}>
                        <Badge  color="secondary" badgeContent={itemsAuditoriasComponentes.length} className={classes.margin}>
                            <Paper>
                                    <Assignment className={classes.configIconoAC} /> 
                            </Paper>
                        </Badge>
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
                    </form>
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
                                itemsAuditoriasComponentes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((auditorias, index) => {
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
                        <TableFooter>
                            <TableRow>
                                 <TableCell colSpan={6}></TableCell>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10]}
                                    colSpan={4}
                                    count={itemsAuditoriasComponentes.length}
                                    rowsPerPage={this.state.rowsPerPage}
                                    page={this.state.page}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                    backIconButtonProps={{
                                        'aria-label': 'Previous Page',
                                      }}
                                      nextIconButtonProps={{
                                        'aria-label': 'Next Page',
                                      }}
                                />
                            </TableRow>
                        </TableFooter>
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


AuditoriasComponentes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Style)(AuditoriasComponentes);