export function postNewTask(name) {
  return {
    type: "@task/POST_NEW_TASK",
    payload: { name }
  };
}
