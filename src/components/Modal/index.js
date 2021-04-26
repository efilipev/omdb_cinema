import React from 'react';
import cancel from '../../assets/cancel.svg';
import {
  ModalCloseImg,
  ModalContainer,
  ModalCloseButton,
  ModalMainContent,
  ModalCloseContainer,
} from './styles';

const Modal = (props) => {
  const { isOpen, closeButton, handleModalClose } = props;
  const handleClose = () => {
    handleModalClose();
  };
  return isOpen ? (
    <ModalContainer>
      {closeButton && (
        <ModalCloseContainer>
          <ModalCloseButton onClick={handleClose}>
            <ModalCloseImg src={cancel} />
          </ModalCloseButton>
        </ModalCloseContainer>
      )}
      <ModalMainContent>{props.children}</ModalMainContent>
    </ModalContainer>
  ) : null;
};

export default Modal;
