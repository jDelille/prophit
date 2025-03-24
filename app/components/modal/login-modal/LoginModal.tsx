"use client";

import React from "react";
import Modal from "../Modal";
import useModal from "@/app/hooks/useModal";

type LoginModalProps = {
  id: string; // Each modal needs a unique ID
};
const LoginModal: React.FC<LoginModalProps> = ({ id }) => {
  const { modals, closeModal } = useModal();
  const isOpen = modals[id];

  const body = (
    <div>
      <h1>Modal Body!</h1>
    </div>
  );

  return (
    <Modal
      id={id}
      isOpen={isOpen}
      disabled={false}
      onClose={closeModal}
      body={body}
    />
  );
};

export default LoginModal;
