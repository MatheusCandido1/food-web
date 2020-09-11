import React from 'react';
import { Container, ModalBody } from './styled';

export default ({ status, setStatus, children }) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('bgModal'))
        setStatus(false);
    }

    return (
        <Container 
            className="bgModal"
            status={status} 
            onClick={handleModalClick}
        >
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}