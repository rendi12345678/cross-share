import React from "react";
import useContextHook from "../../hooks/useContextHook";
import useCreateNewPost from "../../hooks/useCreateNewPost";
import useSelectSocialMedia from "../../hooks/useSelectSocialMedia";
import CancelAndUpload from "../ui/CancelAndUpload";
import ChoosePlatform from "../ui/ChoosePlatform";
import DateAndTime from "../ui/DateAndTime";
import Form from "../ui/Form";
import Modal from "../ui/Modal";

const CreateNewPostModal = () => {
  const { renderInputFields, closeModal } = useCreateNewPost();
  const { handleOnChange, platform, handleSubmitForm } = useSelectSocialMedia();
  const { isOpenModal } = useContextHook();

  return (
    <>
      {isOpenModal.createNewPost ? (
        <Modal className="create-new-post-modal">
          <h1>Create New Post</h1>
          <Form onSubmit={handleSubmitForm}>
            <ChoosePlatform handleOnChange={handleOnChange} />
            <DateAndTime />
            {renderInputFields(platform)}
            <CancelAndUpload closeModal={closeModal} />
          </Form>
        </Modal>
      ) : null}
    </>
  );
};

export default CreateNewPostModal;
