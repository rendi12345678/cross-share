import Input from "../components/ui/Input";

function useCreateNewPost() {
  const handleCreateNewPost = () => {
    console.log("Create new post");
  };

  const renderInputFields = (platform) => {
    if (platform === "Youtube")
      return (
        <>
          <Input type="file" name="video" label="Choose Video" />
          <Input type="text" name="title" label="Title" />
          <Input type="text" name="description" label="description" />
          <Input type="text" name="access-token" label="Access Token" />
        </>
      );
    return <Input type="text" name="title" label="Title" />;
  };

  return { handleCreateNewPost, renderInputFields };
}

export default useCreateNewPost;
