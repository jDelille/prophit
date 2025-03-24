"use client";

import React, { useCallback, useEffect, useState } from "react";
import './modal.scss';

type ModalProps = {
  isOpen: boolean;
  disabled?: boolean;
  onClose: (id: string) => void;
  body: React.ReactElement;
  id: string;
};
const Modal: React.FC<ModalProps> = ({
  isOpen,
  disabled,
  onClose,
  body,
  id,
}) => {
  const [showModal, setShowModal] = useState<boolean>(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose(id);
    }, 300);
  }, [disabled, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="overlay">
        <div className={showModal ? "modal" : "hide-modal"}>
          <div className="modal-content">
            <div className="close" onClick={handleClose}>Close</div>
            <div className="modal-body">{body}</div>
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default Modal;
