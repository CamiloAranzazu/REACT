import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemMenu from '../itemMenu/ItemMenu'

// Iconos
import Assignment from '@material-ui/icons/Assignment';
import Class from '@material-ui/icons/Class';
import Build from '@material-ui/icons/Build';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },


    content: {
        padding: theme.spacing.unit * 10,
    },

    paper: {
        height: 90,
        width: 350,
    },

    iconoSize:
    {
        height: 50,
        width: 50,
    },


    configIconoRI: {
        height: 90,
        width: 90,
        left: 18,
        // top: 10,
        bottom: 30,
        backgroundColor: "#fd960e",
        color: "#FAFAFA",
    },

    configIconoAC: {
        height: 90,
        width: 90,
        left: 18,
        // top: 10,
        bottom: 30,
        backgroundColor: "#52ab56",
        color: "#FAFAFA",
    },

    configIconoOT: {
        height: 90,
        width: 90,
        left: 18,
        // top: 10,
        bottom: 30,
        backgroundColor: "#13b8cc",
        color: "#FAFAFA",
    },

});


class Menu extends Component {
    render() {
        const { classes } = this.props;

        return (

            <div className={classes.root}>
                <main className={classes.content}>
                    <Grid container spacing={24}>
                        <Grid item xs >
                            <ItemMenu ruta="/reglasImpuestos" primerTexto="Reglas Impuestos" vista={classes.configIconoRI} textArea="OFAS" icono={<Class className={classes.iconoSize} />} />
                        </Grid>

                        <Grid item xs>
                            <ItemMenu ruta="/AuditoriasComponentes" primerTexto="Auditorias Componentes" vista={classes.configIconoAC} textArea="Soporte" icono={<Assignment className={classes.iconoSize} />} />
                        </Grid>

                        <Grid item xs>
                            <ItemMenu ruta="/Otros" primerTexto="Otros" vista={classes.configIconoOT} textArea="ABR" icono={<Build className={classes.iconoSize} />} />
                        </Grid>
                    </Grid>
                </main>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);