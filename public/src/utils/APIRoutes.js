
// export const host = "http://localhost:5000";
// export const host = window.location.origin;
// remove port number from host and add port 5000
export const host = window.location.origin.replace(/:\d+/, ":5000");
export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const checkMessageRoute = `${host}/api/messages/checkmsg`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;