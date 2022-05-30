import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoIcon from '@mui/icons-material/Photo';
import "./modal.css";




const Modal = ({estado, cambiarestado}) => {
    return(
        <>
            {estado &&
                    <Overlay>
                        <ContenedorModal>
                            <EncabezadoModal>
                                <h3>Publicar proyecto</h3>
                            </EncabezadoModal>
                            <BotonCerrar onClick={()=> {cambiarestado(false)}}><CloseIcon/></BotonCerrar>
                            <form className="input">
                                <span className="component-input-label">Creador del proyecto</span>
                                <input className="component-input-input"/>
                                <span className="component-input-label">Nombre del proyecto</span>
                                <input className="component-input-input"/>
                                <span className="component-input-label">Vacantes del proyecto</span>
                                <input className="component-input-input"/>
                                <span className="component-input-label">Descripción del proyecto</span>
                                <input className="component-input-input2"/>
                                <span className="component-input-label">Monto mínimo de inversión</span>
                                <input className="component-input-input"/>
                                <hr className="publicarHr"/>
                                <div className="publicarBottom">

                                    <div className="publicarOpcion">
                                        <PhotoIcon htmlColor="tomato" className="shareIcon"/>
                                        <span className="shareOptionText">Foto</span>
                                    </div>
                                    <div className="publicarOpcion">
                                        <VideoCameraBackIcon htmlColor="green" className="shareIcon"/>
                                        <span className="shareOptionText">Video</span>
                                    </div>
                                    <div className="publicarOpcion">
                                        <AttachFileIcon htmlColor="black" className="shareIcon"/>
                                        <span className="shareOptionText">Archivo</span>
                                    </div>
                                </div>

                                <button className="publicarButton">Publicar</button>

                            </form>

                        </ContenedorModal>

                    </Overlay>
            }
        </>
    )
}

export default Modal;

const Overlay = styled.div `
width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left:0;
  background: rgba(0,0,0,.5);
  
  display: flex;
  align-items: center;
  justify-content: center;
  

`;
const ContenedorModal = styled.div `
  width: 800px;
  height:700px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }

`;


const EncabezadoModal = styled.div `
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #E8E8E8;
  h3{
    font-weight: 500;
    font-size: 18px;
    color: black;
  }
`;

const BotonCerrar = styled.div `
 position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: black;
  top:15px;
  right: 20px;
  
  &:hover{
    background: #f2f2f2;
  }
  
  
`;

