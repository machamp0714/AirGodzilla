import axios from "axios";

export const getRooms = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/rooms", { withCredentials: true })
      .then((response) => {
        dispatch({ type: "GET_ROOMS_SUCCESS", rooms: response.data });
      })
      .catch((error) => {
        dispatch({ type: "GET_ROOMS_ERROR", error });
      });
  };
};
