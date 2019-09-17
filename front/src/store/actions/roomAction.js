import axios from "axios";
import httpClient from "../../components/Config/axios";
import * as actionTypes from "../../utils/actionTypes";

const createRoomSuccess = (response) => ({
  type: actionTypes.CREATE_ROOM_SUCCESS,
  room: response.room
});

const createRoomFailure = (error) => ({
  type: actionTypes.CREATE_ROOM_FAILURE,
  error
});

const editRoomFetch = () => ({
  type: actionTypes.EDIT_ROOM_REQUEST
});

const editRoomSuccess = (response) => ({
  type: actionTypes.EDIT_ROOM_SUCCESS,
  room: response.room
});

const editRoomFailure = (error) => ({
  type: actionTypes.EDIT_ROOM_FAILURE,
  error
});

const updateRoomSuccess = (response) => ({
  type: actionTypes.UPDATE_ROOM_SUCCESS,
  room: response.room
});

const updateRoomFailure = (error) => ({
  type: actionTypes.UPDATE_ROOM_FAILURE,
  error
});

export const getRooms = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/api/v1/rooms", { withCredentials: true })
      .then((response) => {
        dispatch({ type: actionTypes.GET_ROOMS_SUCCESS, rooms: response.data });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.GET_ROOMS_FAILURE, error });
      });
  };
};

export const createRoomRequest = (newRoom) => {
  return (dispatch) => {
    httpClient
      .post("http://localhost:3001/api/v1/rooms", newRoom)
      .then((response) => {
        dispatch(createRoomSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createRoomFailure(error));
      });
  };
};

export const editRoomRequest = (id) => {
  return (dispatch) => {
    dispatch(editRoomFetch());

    return axios
      .get("http://localhost:3001/api/v1/edit_room", {
        withCredentials: true,
        params: { id: id }
      })
      .then((response) => {
        dispatch(editRoomSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editRoomFailure(error));
      });
  };
};

export const updateRoomRequest = (params, room_id) => {
  return (dispatch) => {
    httpClient
      .patch("http://localhost:3001/api/v1/rooms/" + room_id, params)
      .then((response) => {
        dispatch(updateRoomSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateRoomFailure(error));
      });
  };
};
