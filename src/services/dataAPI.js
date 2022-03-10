import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-task-j.herokuapp.com",
});

export const getStudentList = (page, size) => {
  return instance.get("/data", {
    params: {
      page,
      size,
    },
  });
};
