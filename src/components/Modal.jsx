import "../styles/modal.css";
import "../styles/global.css";
import { RiCloseLine } from "react-icons/ri";
import PropTypes from "prop-types"

function Modal ({setIsOpen}) {
    return (
        <>
        <div className="darkBG" onClick={()=> setIsOpen(false)}/>
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h1 className="heading">Timer terminé !</h1>
                </div>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>
                    <RiCloseLine style={{marginBottom: "-3px"}}/>
                </button>
                <div className="modalContent">
                    <p>Il est temps de prendre une pause !</p>
                </div>
            </div>
        </div>
        </>
    )
}

Modal.propTypes = {
    setIsOpen : PropTypes.func,
}

export default Modal;