import axios from "axios";

export default {
  // Gets all chores
  getChores: function() {
    return axios.get("/api/chores");
  },
  // Gets the book with the given id
  getChore: function(id) {
    return axios.get("/api/chores/" + id);
  },
  // Deletes the book with the given id
  deleteChore: function(id) {
    return axios.delete("/api/chores/" + id);
  },
  // Saves a chore to the database
  saveChore: function(choreData) {
    return axios.post("/api/chores", choreData);
  },
  getUser: function() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
