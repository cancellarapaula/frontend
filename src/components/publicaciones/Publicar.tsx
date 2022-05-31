import React from "react";
import "./publicar.css";
import CreateIcon from '@mui/icons-material/Create';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {Modal} from '../../components/modal/Modal';
import EstadoPopUp from "../hooks/estadoModal";

export default function Publicar() {

    const {estado, setTrue, setFalse} = EstadoPopUp()

    console.log("Componente Publicar:", estado)
    return (
        <>
            <div>
                <div className="publicar">
                    <div className="publicarWrapper">
                        <div className="publicarTop">
                            <img className="publicarImgPerfil" src="/images/usuarios/user1.jpg" alt="foto perfil"/>
                            <input
                                placeholder="¿Qué estás pensando?"
                                className="publicarInput"
                            />
                        </div>
                        <hr className="publicarHr"/>
                        <div className="publicarBottom">


                            <div className="publicarOpcion">
                                <TipsAndUpdatesIcon htmlColor="tomato" className="shareIcon"/>
                                <button className="shareOptionText" onClick={setTrue}>Publicar
                                    proyecto
                                </button>
                            </div>
                            <div className="publicarOpcion">
                                <CreateIcon htmlColor="green" className="shareIcon"/>
                                <button className="shareOptionText">Actualizar estado del proyecto</button>
                            </div>

                        </div>
                    </div>
                </div>

                <Modal/>

            </div>

        </>
    );
}



