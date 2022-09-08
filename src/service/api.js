import axios from "axios";

const API_URL = "http://localhost:3001/expense";

/* function component for adding expense to API */
export const addExpenseToApi = async (data) => {
  try {
    console.log("api called");
    await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addExpense api", error.message);
  }
};

/* function component for getting all expense from API */
export const getExpenseFromApi = async () => {
  try {
    console.log("api called");
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getExpense api", error.message);
  }
};

/* function component for getting  expense using ID from API */
export const getExpenseByIdFromApi = async (data) => {
  try {
    console.log("api called");
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling getexpenseById api", error.message);
  }
};

/* function component for editting expense using ID from API */
export const editExpenseById = async (data, id) => {
  try {
    console.log("api called");
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling editExpense api", error.message);
  }
};

/* function component for deleting expense using ID from API */
export const deleteExpenseById = async (id) => {
  try {
    console.log("api called");
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling deleteExpense api", error.message);
  }
};
