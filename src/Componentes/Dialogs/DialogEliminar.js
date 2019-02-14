import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

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
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Esta seguro de elliminar el registro?"}
                    </DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Eliminar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

DialogEliminar.defaultProps = {
    open: false,
}


export default DialogEliminar;