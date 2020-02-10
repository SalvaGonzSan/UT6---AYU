import React, { Component } from 'react'
import Imagen from 'react-image'

class SelectoresAtributo extends Component {
    render() {
        return (
            <div>
                <a href="https://www.google.com" target="_blank" rel='noreferrer noopener'>Enlace a Google que cumple un selector de atributos</a>
                <br></br>
                <a href="https://www.bing.com" target="_self">Enlace a Google que cumple un selector de atributos con el valor _self</a>
                <br></br>
                <Imagen alt="Foto del K2" src={require('./img/k2-33.jpeg')} />
                <br></br>
                <p className="claseparrafo-1">Este párrafo va a cumplir un selector de atributos para elementos con el atributo class y cuyo valor comience por claseparrafo</p>
                <br></br>
                <p className="claseselector1">Este párrafor va a cumplir un selector de atributos para elementos con el atributo class y cuyo valor comience por una palabra que puede ir seguida de cualquier conjunto de caracteres</p>
            </div>
        )
    }
}

export default SelectoresAtributo