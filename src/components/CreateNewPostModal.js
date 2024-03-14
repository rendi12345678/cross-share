import React from "react";
import CancelAndUpload from "./CancelAndUpload";
import ChoosePlatform from "./ChoosePlatform";
import DateAndAccessToken from "./DateAndAccessToken";
import Modal from "./Modal";
import Form from "./ui/Form";

function CreateNewPostModal({
  handleYoutubeFormSubmit,
  handleOnChange,
  renderInputFields,
  platform,
  closeModal,
  isOpenModal,
}) {
  return (
    <Modal className="create-new-post-modal">
      <h1>Create New Post</h1>
      <Form onSubmit={handleYoutubeFormSubmit}>
        <ChoosePlatform handleOnChange={handleOnChange} />
        <DateAndAccessToken />
        {renderInputFields(platform)}
        <CancelAndUpload closeModal={closeModal} />
      </Form>
    </Modal>
  );
}

export default CreateNewPostModal;
