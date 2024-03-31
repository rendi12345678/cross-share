import React from "react";
import useContextHook from "../../hooks/useContextHook";
import useCreateNewPost from "../../hooks/useCreateNewPost";
import Input from "../ui/Input";
import useForm from "./../../hooks/useForm";
import CancelAndUpload from "./../ui/CancelAndUpload";
import DateAndTime from "./../ui/DateAndTime";
import Form from "./../ui/Form";
import Modal from "./../ui/Modal";
import VideoAndDescription from "./../ui/VideoAndDescription";

const CreateNewPostModal = () => {
  const { closeModal } = useCreateNewPost();
  const { handleSubmitForm } = useForm();
  const { isOpenModal, titleRef } = useContextHook();

  return (
    <>
      {isOpenModal.createNewPost ? (
        <Modal className="create-new-post-modal">
          <h1>Create New Post</h1>
          <Form onSubmit={handleSubmitForm}>
            <DateAndTime />
            <Input type="text" name="title" label="Title" ref={titleRef} />
            <VideoAndDescription />
            <CancelAndUpload closeModal={closeModal} />
          </Form>
        </Modal>
      ) : null}
    </>
  );
};

export default CreateNewPostModal;
