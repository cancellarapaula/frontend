import "./feedCentral.css";
import Publicar from "../publicaciones/Publicar";
import Modal from "../modal/Modal";

export default function FeedCentral() {
    return (
        <div className="feedCentral">
            <div className="feedWrapper">
                <Publicar />
            </div>
            <Modal />
        </div>
    );
}
