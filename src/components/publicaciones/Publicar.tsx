import React, {useState} from "react";
import "./publicar.css";
import CreateIcon from '@mui/icons-material/Create';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Modal from '../../components/modal/Modal';

export default function Publicar() {



    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    return (
        <>
            <div>
        <div className="publicar">
            <div className="publicarWrapper">
                <div className="publicarTop">
                    <img className="publicarImgPerfil" src="/images/usuarios/user1.jpg" alt="foto perfil" />
                    <input
                        placeholder="¿Qué estás pensando?"
                        className="publicarInput"
                    />
                </div>
                <hr className="publicarHr"/>
                <div className="publicarBottom">


                    <div className="publicarOpcion">
                         <TipsAndUpdatesIcon htmlColor="tomato" className="shareIcon"/>
                         <button className="shareOptionText" onClick={()=> {cambiarEstadoModal1(!estadoModal1)}}>Publicar proyecto</button>
                    </div>
                    <div className="publicarOpcion">
                        <CreateIcon htmlColor="green" className="shareIcon"/>
                        <button className="shareOptionText">Actualizar estado del proyecto</button>
                    </div>

                </div>
            </div>
        </div>

                <Modal
                estado = {estadoModal1}
               cambiarestado={cambiarEstadoModal1}/>
            </div>

        </>
    );
}
