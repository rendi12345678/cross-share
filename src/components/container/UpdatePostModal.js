import React from "react";
import useContextHook from "../../hooks/useContextHook";
import Modal from "../ui/Modal";

function UpdatePostModal() {
  const { isOpenModal } = useContextHook();

  return (
    <>
      {isOpenModal.updatePost ? (
        <Modal>
          <h1>Update Post</h1>
        </Modal>
      ) : null}
    </>
  );
}

export default UpdatePostModal;
