import React from "react";
import useButtons from "../../hooks/useButtons";
import useContextHook from "../../hooks/useContextHook";

function CancelAndDelete() {
  const { CancelButton, DeleteButton } = useButtons();
  const {setIsOpenModal} = useContextHook()

  return (
    <div>
      <CancelButton text="Cancel" onClick={() => setIsOpenModal({deletePost: false})}/>
      <DeleteButton text="Delete" />
    </div>
  );
}

export default CancelAndDelete;
