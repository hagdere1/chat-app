export function selectChannel(id) {
  dispatch({
    type: "SELECT_CHANNEL",
    id: id
  });
}
