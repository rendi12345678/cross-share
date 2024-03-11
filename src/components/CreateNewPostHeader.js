import React from "react";
import useCreateNewPost from "../hooks/useCreateNewPost";
import useSelectSocialMedia from "../hooks/useSelectSocialMedia";
import Modal from "./Modal";
import SelectSocialMedia from "./SelectSocialMedia";
import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Select from "./ui/Select";

function CreateNewPostHeader() {
  const { handleCreateNewPost, renderInputFields } = useCreateNewPost();
  const { handleOnChange, platform } = useSelectSocialMedia();

  return (
    <header>
      <SelectSocialMedia />
      <Button bgColor="var(--accent-color)" onClick={handleCreateNewPost}>
        Create New Post
      </Button>
      <Modal className="create-new-post-modal">
        <h1>Create New Post</h1>
        <Form>
          <Select onChange={handleOnChange} label="Choose Platform">
            <Select.Option key="1">Youtube</Select.Option>
            <Select.Option key="2">X / Twitter</Select.Option>
          </Select>
          <div className="date-and-access-token">
            <Input type="date" name="date" label="Upload Schedule" />
            <Input type="text" name="access-token" label="Access Token" />
          </div>
          {renderInputFields(platform)}
          <div className="cancel-and-upload">
            <Button>Cancel</Button>
            <Button>Upload</Button>
          </div>
        </Form>
      </Modal>
    </header>
  );
}

export default CreateNewPostHeader;
