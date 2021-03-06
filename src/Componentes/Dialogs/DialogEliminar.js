import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

    buttonCancelar: 
    {
        margin: theme.spacing.unit,
        backgroundColor: "#52ab56",
        color: "#FAFAFA",
    },
    buttonEliminar: 
    {
        margin: theme.spacing.unit,
        backgroundColor: "#FF0000",
        color: "#FAFAFA",
    },

    style:
    {
        marginTop: 10,
    },
    
    iconoSize:{
        height: 90,
        width: 90,
        left: 18,
        // top: 10,
        bottom: 30,
        backgroundColor: "#FFFFFF",
        color: "#fd960e",
    },
    estiloLetras:{
        width: 60,
    },

});


class DialogEliminar extends React.Component {
    state = {
        open: false,
    };

    componentDidMount = () => {
        this.setState(
            { open: this.props.open }
        );
    }


    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes,
                mensaje,
                icono,
                actionEliminar } = this.props;
        return (
            <div>
                <Dialog 
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <Grid  container >
                        <Grid  item xs={12}>
                            <div align="center">
                                {icono}
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.estiloLetras}>
                            <Typography  align="center"  variant="title" >
                               {mensaje}
                            </Typography>
                        </Grid>
                            
                        <Grid item xs={6} align="center">
                            <Button className={classes.buttonCancelar} onClick={this.handleClose} color="primary">
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item xs={6} align="center">
                            <Button className={classes.buttonEliminar} onClick={actionEliminar} color="primary">
                                Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        );
    }
}

DialogEliminar.defaultProps = {
    open: false,
}


export default withStyles(styles)(DialogEliminar);