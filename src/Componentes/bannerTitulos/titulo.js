import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  
    colorTitulo: {
      backgroundColor: "#1b344c",
    },
  
  });
  


class Titulo extends Component {
    
    render(){
        const { classes,
                titulo } = this.props;

        return(
            <div>
                     <AppBar position="static" className={classes.colorTitulo} >
                        <Toolbar>
                            <Typography variant="h6" color="inherit">
                                {titulo}
                            </Typography>
                        </Toolbar>
                    </AppBar>
            </div>
        )
    }
}

Titulo.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
export default withStyles(styles, { withTheme: true })(Titulo);