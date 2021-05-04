import React from "react";
import { Modal, ModalBody } from "reactstrap";

const ModalImage = ({ show, srcImg, setShow }) => {
  return (
    <Modal isOpen={show} toggle={() => setShow(!show)}>
      <ModalBody style={{ margin: "0 auto" }}>
        <img alt="poster" src={srcImg} />
      </ModalBody>
    </Modal>
  );
};

export default ModalImage;
