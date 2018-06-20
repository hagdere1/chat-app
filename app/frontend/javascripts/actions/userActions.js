export function setCurrentUserFromCookie(currentUser) {
  return {type: "SET_CURRENT_USER", currentUser: currentUser};
}
