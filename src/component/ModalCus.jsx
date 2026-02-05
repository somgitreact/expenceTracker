import React from 'react'
import ReactModal from 'react-modal';
const ModalCus = ({children, isOpen, onClose}) => {
  return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        parentSelector={() => document.querySelector('#root')}
          className="modal"
          overlayClassName="overlay"
      >
        {children}
      </ReactModal>
  )
}

export default ModalCus