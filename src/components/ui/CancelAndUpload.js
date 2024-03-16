import React from "react";
import useButtons from "../../hooks/useButtons";

function CancelAndUpload({ closeModal }) {
  const { PrimaryButton, CancelButton } = useButtons();

  return (
    <div className="cancel-and-upload">
      <CancelButton text="Cancel" onClick={closeModal} />
      <PrimaryButton text="Upload" />
    </div>
  );
}

export default CancelAndUpload;
