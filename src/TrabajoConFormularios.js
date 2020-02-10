import React, { Component } from 'react'
//import Imagen from 'react-image'

class TrabajoConFormularios extends Component {
    render() {
        return (
            <div>
                <form name="formulario1" id="formulario1id" action="">
                    <fieldset>
                            <legend>Formulario con React</legend>
                            <label for="campotexto1id">Nombre:</label>
                            <input type="text" name="campotexto1" id="campotexto1id" placeholder="Introduce tu nombre"></input>
                            <label for="campotexto2id">Campo de búsqueda:</label>
                            <input type="text" name="campotexto2" id="campotexto2id" placeholder="Término de búsqueda" className="claseinput1"></input>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TrabajoConFormularios