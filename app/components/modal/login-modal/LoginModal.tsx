"use client";

import React from "react";
import Modal from "../Modal";
import useModal from "@/app/hooks/useModal";
import './loginModal.scss';
import Input from "../../input/Input";

type LoginModalProps = {
  id: string; // Each modal needs a unique ID
};
const LoginModal: React.FC<LoginModalProps> = ({ id }) => {
  const { modals, closeModal } = useModal();
  const isOpen = modals[id];

  const body = (
    <div className="body">
      <h2 className="body-title">Welcome to PropHit</h2>
        <div className="input-wrapper">
        <Input placeholder="Email" type="text" className="login-input"/>
        <Input placeholder="Password" type="password" className="login-input"/>
        <button className="login-btn">Continue</button>
        </div>

    </div>
  );

  return (
    <Modal
      id={id}
      isOpen={isOpen}
      disabled={false}
      onClose={closeModal}
      body={body}
      title="Login or sign up"
    />
  );
};

export default LoginModal;
