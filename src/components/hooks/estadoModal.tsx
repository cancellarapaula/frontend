import {useState} from 'react'

const EstadoPopUp = () => {
    const [estado, cambiarEstado] = useState(false);

    const setEstado = (nuevoEstado: boolean) => {
        cambiarEstado(nuevoEstado)
    }

    return {estado, setEstado}
}

export default EstadoPopUp