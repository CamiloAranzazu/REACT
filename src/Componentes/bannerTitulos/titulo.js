import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//Router
import { withRouter } from 'react-router-dom';

// Iconos
import ReplyIcon from '@material-ui/icons/Reply';

const styles = theme => ({
    colorTitulo: {
        backgroundColor: "#1b344c",
    },

    grow: {
        flexGrow: 1,
    },

    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});

class BotonInicio extends Component {
    render() {
        const {
            classes,
            ruta
        } = this.props;

        return (
            <Button color="inherit" onClick={ruta}>
                <ReplyIcon className={classes} />
                Inicio
            </Button>
        );
    }
}

class Titulo extends Component {
    constructor(props) {
        super(props);

        this.state = { activarBotonInicio: true };
    }

    componentDidMount = () =>{
        this.setState(
            { activarBotonInicio: this.props.esActivarBotonInicio }
        );
    }

    render() {
        const {
            classes,
            history,
            ruta,
            titulo
        } = this.props;

        return (
            <div>
                <AppBar position="static" className={classes.colorTitulo}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {titulo}
                        </Typography>
                        {
                            this.state.activarBotonInicio
                                ? <BotonInicio classes={classes.leftIcon} ruta={() => history.push(ruta)} />
                                : null
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Titulo.defaultProps = {
    esActivarBotonInicio: true,
    ruta: '/Inicio'
}

Titulo.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Titulo));