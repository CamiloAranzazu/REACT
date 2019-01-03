import React, {Component} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Inicio from '../Componentes/menus/Menu'
import reglasImpuestosItems from '../Componentes/vistas/reglasImpuestosItem'
import AuditoriasComponentes from '../Componentes/vistas/auditoriasComponentes'

class RouterComponent extends Component {
    render(){
        return(
              <Router>
                  <React.Fragment>
                      <Route path="/" exact strict component={Inicio}/>
                      <Route path="/Inicio" exact strict component={Inicio}/>
                      <Route path="/reglasImpuestosItems" exact strict component={reglasImpuestosItems}/>
                      <Route path="/AuditoriasComponentes" exact strict component={AuditoriasComponentes}/>
                  </React.Fragment>
              </Router>
        )
    }
}
export default RouterComponent