import produce from "immer";

const INITIAL_STATE = {
  sun: "",
  water: "",
  pet: ""
};

export default function questions(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "QUESTION_SUN": {
        draft.sun = action.button;
        break;
      }
      case "QUESTION_WATER": {
        draft.water = action.button;
        break;
      }
      case "QUESTION_PET": {
        draft.pet = action.button;
        break;
      }
      default:
    }
  });
}
