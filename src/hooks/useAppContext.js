import { useReducer, useRef } from "react";
import useLocalStorage from "./useLocalStorage";

const initialState = {
  isOpenModal: {
    createNewPost: false,
    deletePost: false,
    updatePost: false,
  },
};

const actionTypes = {
  SET_IS_OPEN_MODAL: "SET_IS_OPEN_MODAL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_OPEN_MODAL:
      return {
        ...state,
        isOpenModal: { ...state.isOpenModal, ...action.payload },
      };
    default:
      return state;
  }
};

function useAppContext() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const accessTokenRef = useRef(null);
  const youtubeVideoRef = useRef(null);
  const uploadScheduleRef = useRef(null);
  const modalRef = useRef(null);
  let url = "http://localhost:5000";
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeLayout, setActiveLayout] = useLocalStorage("activeLayout", "dashboard")

  const { isOpenModal } = state;

  const setIsOpenModal = (value) => {
    dispatch({ type: actionTypes.SET_IS_OPEN_MODAL, payload: value });
  };

  const contextValue = {
    titleRef,
    descriptionRef,
    accessTokenRef,
    youtubeVideoRef,
    uploadScheduleRef,
    modalRef,
    activeLayout,
    setActiveLayout,
    url,
    setIsOpenModal,
    isOpenModal,
  };

  return { contextValue };
}

export default useAppContext;
