import axios from "axios";

export default {
  //PROJECTS
  // Gets all projects
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the project with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the project with the given id
  deleteProject: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  // Updates a project to the database
  updateProject: function(id, projectData) {
    console.log("API>updateProject");
    console.log("projectData:");
    console.log(projectData);
    return axios.put("/api/projects/" + id, projectData);
  },
  // Saves a project to the database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
  // DAILY ACTIONS
  // Gets the action with the given id
  getDailyActions: function(id) {
    return axios.get("/api/dailyActions/" + id);
  },
  // Updates a project to the database
  updateDailyActions: function(id, dailyActionData) {
    return axios.put("/api/dailyActions/" + id, dailyActionData);
  },
  // ACTIONS
  // Gets all actions
  getActions: function() {
    return axios.get("/api/actions");
  },
  // Gets the action with the given id
  getAction: function(id) {
    return axios.get("/api/actions/" + id);
  },
  // Deletes the action with the given id
  deleteAction: function(id) {
    return axios.delete("/api/actions/" + id);
  },
  // Saves a action to the database
  saveAction: function(actionData) {
    return axios.post("/api/actions", actionData);
  }
};
