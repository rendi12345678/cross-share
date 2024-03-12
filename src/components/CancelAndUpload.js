import React from "react";
import Button from "./ui/Button";

function CancelAndUpload({ closeModal }) {
  return (
    <div className="cancel-and-upload">
      <Button bgColor="var(--primary-color)" type="button" onClick={closeModal}>
        Cancel
      </Button>
      <Button bgColor="var(--accent-color)" type="submit">
        Upload
      </Button>
    </div>
  );
}

export default CancelAndUpload;
