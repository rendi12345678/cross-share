import withButton from "../components/hoc/withButton";
import Button from "../components/ui/Button";

const PrimaryButton = withButton(Button, {
  bgColor: "var(--accent-color)",
});

const EditButton = withButton(Button, {
  bgColor: "orange",
  type: "button",
});

const DeleteButton = withButton(Button, {
  bgColor: "red",
  type: "button",
});

const CancelButton = withButton(Button, {
  bgColor: "var(--primary-color)",
  type: "button",
});

function useButtons() {
  return { PrimaryButton, DeleteButton, EditButton, CancelButton };
}

export default useButtons;
