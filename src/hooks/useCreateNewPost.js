import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";

function useCreateNewPost() {
  const handleCreateNewPost = () => {
    console.log("Create new post");
  };

  const renderInputFields = (platform) => {
    if (platform === "Youtube")
      return (
        <>
          <Input type="text" name="title" label="Title" />
          <div className="video-and-description">
            <Input type="file" name="video" label="Choose Video" />
            <TextArea name="description" label="description" />
          </div>
        </>
      );
    return <Input type="text" name="title" label="Title" />;
  };

  return { handleCreateNewPost, renderInputFields };
}

export default useCreateNewPost;
