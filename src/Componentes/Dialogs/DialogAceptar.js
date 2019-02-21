import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

    buttonAceptar: 
    {
        margin: theme.spacing.unit,
        backgroundColor: "#52ab56",
        color: "#FAFAFA",
    },

    style:
    {
        marginTop: 10,
    },


});


class DialogAceptar extends React.Component {
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
                icono   } = this.props;
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
                        <Grid item xs={12}>
                            <Typography align="center"  variant="title">
                               {mensaje}
                            </Typography>
                        </Grid>
                            
                        <Grid item xs={12} align="center">
                            <Button className={classes.buttonAceptar} onClick={this.handleClose} color="primary">
                                Listo
                            </Button>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        );
    }
}

DialogAceptar.defaultProps = {
    open: false,
}


export default withStyles(styles)(DialogAceptar);