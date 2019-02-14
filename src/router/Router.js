import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inicio from '../vistas/inicio/inicio'
import reglasImpuestos from '../vistas/reglasImpuestos/reglasImpuestos'
import AuditoriasComponentes from '../vistas/auditoriasComponentes/auditoriasComponentes'
import DialogEliminar from '../Componentes/Dialogs/DialogEliminar'

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" exact strict component={Inicio} />
                    <Route path="/Inicio" exact strict component={Inicio} />
                    <Route path="/reglasImpuestos" exact strict component={reglasImpuestos} />
                    <Route path="/AuditoriasComponentes" exact strict component={AuditoriasComponentes} />
                    <Route path="/Otros" exact strict component={DialogEliminar} />
                </React.Fragment>
            </Router>
        )
    }
}
export default RouterComponent