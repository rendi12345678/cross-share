import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import useContextHook from "./useContextHook";

function useCreateNewPost() {
  const { titleRef, descriptionRef, youtubeVideoRef } = useContextHook();

  const handleCreateNewPost = () => {
    console.log("Create new post");
  };

  const renderInputFields = (platform) => {
    if (platform === "Youtube")
      return (
        <>
          <Input type="text" name="title" label="Title" ref={titleRef} />
          <div className="video-and-description">
            <Input
              type="file"
              name="video"
              label="Choose Video"
              ref={youtubeVideoRef}
              accept="video/*"
            />
            <TextArea
              name="description"
              label="description"
              ref={descriptionRef}
            />
          </div>
        </>
      );
    return <Input type="text" name="title" label="Title" ref={titleRef} />;
  };

  return { handleCreateNewPost, renderInputFields };
}

export default useCreateNewPost;
