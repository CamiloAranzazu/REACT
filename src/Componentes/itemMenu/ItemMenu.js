import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';

const styles = theme => ({


    toolbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
    },
    content: {
        padding: theme.spacing.unit * 10,
    },

    paper: {
        height: 90,
        width: 350,
    },

    iconoA:
    {
        height: 50,
        width: 50,
    },

});


class ItemMenu extends Component {


    render() {
        const {
            classes,
            history,
            icono,
            primerTexto,
            ruta,
            textArea,
            vista } = this.props;

        return (
            <Paper className={classes.paper}>
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Button variant="contained" className={vista} onClick={() => history.push(ruta)}>
                            {icono}
                        </Button>
                    </Grid>
                    <Grid item xs={1} sm container>
                        <Grid item xs container direction="column" >
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {primerTexto}
                                </Typography>
                                <Typography color="textSecondary">
                                    {textArea}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

ItemMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(ItemMenu));