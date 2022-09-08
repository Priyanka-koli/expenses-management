import axios from "axios";

const API_URL = "http://localhost:3001/expense";

export const addExpenseToApi = async (data) => {
  try {
    console.log("api called");
    await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling another api", error.message);
  }
};

export const getExpenseFromApi = async () => {
  try {
    console.log("api called");
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling another api", error.message);
  }
};

export const getExpenseByIdFromApi = async (data) => {
  try {
    console.log("api called");
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling another api", error.message);
  }
};

export const editExpenseById = async (data, id) => {
  try {
    console.log("api called");
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling edit user api", error.message);
  }
};
