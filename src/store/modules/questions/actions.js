export function setQuestions(buttons) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { buttons }
  };
}
