import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Pruebas extends Component {

  render() {
        return (
            <div>
                    <form  onSubmit={this.handleSubmit}>
                        <Button
                            
                            onClick={this.consultarReglasImpuestos }
                            size="small"
                        >
                            Modal
                        </Button>
                    </form>
            </div>
        );
    }
}

export default (Pruebas);
