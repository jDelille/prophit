"use client";

import React, { useCallback, useEffect, useState } from "react";
import './modal.scss';
import { CloseIcon } from "@/app/icons";

type ModalProps = {
  isOpen: boolean;
  disabled?: boolean;
  onClose: (id: string) => void;
  body: React.ReactElement;
  id: string;
  title: string;
};
const Modal: React.FC<ModalProps> = ({
  isOpen,
  disabled,
  onClose,
  body,
  id,
  title
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
          <div className="modal-header">
            <div className="title">{title}</div>
            <div className="close" onClick={handleClose}><CloseIcon size={18}/></div>
            </div>
            <div className="modal-body">{body}</div>
        </div>
        ;
      </div>
    </>
  );
};

export default Modal;
