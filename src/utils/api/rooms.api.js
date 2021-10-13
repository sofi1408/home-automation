import axios from "./axios";

export const getRoomsApi = () => {
  return axios.get("/rooms.json");
};

export const updateRoomsApi = (data) => {
  return axios.put("/rooms.json", data);
};
