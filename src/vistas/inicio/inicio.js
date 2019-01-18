import React, { Component } from 'react'
import Titulo from '../../Componentes/bannerTitulos/titulo'
import Menu from '../../Componentes/menus/Menu'

class Inicio extends Component{
    render(){
        return(
            <div>
                <Titulo esActivarBotonInicio={false} titulo='Menu Soporte' />
                <Menu />
            </div>
        );
    }
}

export default Inicio;