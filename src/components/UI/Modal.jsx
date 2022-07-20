import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Backdrop = props => {
    return (
        <div>

        </div>
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
    <Cover>
        {ReactDOM.createPortal(<Backdrop/>, portalElement )}
        {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </Cover>
  )
}

const Cover = styled.div`
    background-color: black;
`;

export default Modal;