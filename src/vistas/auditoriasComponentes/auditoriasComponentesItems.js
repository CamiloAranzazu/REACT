import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import DialogEliminar from '../../Componentes/Dialogs/DialogEliminar'
import DialogAceptar from '../../Componentes/Dialogs/DialogAceptar'

//iconos
import Error from '@material-ui/icons/Error';
import Beenhere from '@material-ui/icons/Beenhere';

const Style = ({
    EstiloBotonEliminar:{
        color: '#FF0000',
        margin: 10,
        height: 36,
        borderRadius: 16
    },
    EstiloBotonEditar: {
        color: '#FFFFFF',
        backgroundColor: '#4caf50',
        margin: 3,
        height: 36,
        borderRadius: 16    
    },
    EstiloIconoEliminar:{
        height: 90,
        width: 90,
        left: 18,
        // top: 10,
        bottom: 30,
        backgroundColor: "#FFFFFF",
        color: "#fd960e",
    },
    EstiloIconoAceptar:{
        height: 90,
        width: 90,
        left: 18,
        // top: 10,
        bottom: 30,
        backgroundColor: "#FFFFFF",
        color: "#52ab56",
    }
});

class AuditoriasComponentesItems extends Component {
    constructor() {
        super();
        this.state = {  openDialogEliminar: false,
                        openDialogAceptar: false,
                        eliminar: false };
    }
    
    activarDialog = () => {   
        console.log(this.props.id);

        fetch('').then(() => 
        {
            this.setState({openDialogEliminar: true});
        });
        this.setState({openDialogEliminar: false});
    }


    EliminarAuditoria = () => {
         
            this.setState({openDialogEliminar: false});
            this.setState({openDialogAceptar: true});
            
    }

    render() {
        const {  eliminar,
                 openDialogEliminar,
                 openDialogAceptar } = this.state;
        const {
            id,
            Opcion,
            Proyecto,
            Ruta,
            EsquemaComponente,
            NombreComponente,
            TipoComponente,
            Observacion,
            classes,
        } = this.props;
        return (
                <TableRow  >
                    <TableCell padding="none" align="right" >
                        <Tooltip title="Elimiar" placement="left-start">
                        <form onSubmit={this.handleSubmit}>
                            {this.state.openDialogEliminar === true ? <DialogEliminar open={openDialogEliminar} eliminar={eliminar} 
                                                                                      mensaje= "Está seguro de eliminar el componente "
                                                                                      icono={<Error className={classes.EstiloIconoEliminar}/> }
                                                                                      actionEliminar={this.EliminarAuditoria}
                            
                            /> : null} 
                            {this.state.openDialogAceptar === true ? <DialogAceptar open={openDialogAceptar} eliminar={eliminar} 
                                                         mensaje="Auditoria Eliminada"
                                                         icono={<Beenhere className={classes.EstiloIconoAceptar}/>  }
                            /> : null} 

                            <Fab className={classes.EstiloBotonEliminar} size="small" onClick={this.activarDialog} >
                                <DeleteIcon  style={{ height: "20px" }} />
                            </Fab>
                        </form>
                        </Tooltip>
                    </TableCell>
                    <TableCell padding="none" align="left">
                        <Tooltip title="Editar" placement="right-start">
                            <Fab className={classes.EstiloBotonEditar} size="small" >
                                <EditIcon style={{ height: "20px" }} />
                            </Fab>
                        </Tooltip>
                    </TableCell>
                    <TableCell key={id} padding="none" align="center">{Opcion}</TableCell>
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

export default withStyles(Style)(AuditoriasComponentesItems);