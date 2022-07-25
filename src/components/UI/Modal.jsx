import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = props => {
    return (
        <div onClick={props.onClose} />
    );
};

const ModalOverlay = props => {
    return (
        <div>
            <div>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <BG>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<Layer>{props.children}</Layer>, portalElement)}
    </BG>
  )
}

const BG = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: black;
    opacity: 0.8;
`;

const Layer = styled("ModalOverlay")`
    z-index: 10;
    position: absolute;
    top: 15rem;
    left: 2rem;
    background: #d7d7d7;
    width: 80%;
    padding: 1rem;
    border-radius: 1rem;
`;

export default Modal;