import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { useRef } from 'react';
import './MyModal.scss'

export const MyModal = (props) => {
    const { show, onHide, textP, textS } = props;


    return (
        <Modal 
        id='modal'
        fullscreen={true}
        centered
        keyboard
        animation
            size="sm"
            show={show}
            onHide={onHide}
        >
            <h3>{textP}</h3>
                <p>{textS}</p>
                <button onClick={onHide}>OK</button>
        </Modal>
    );
}