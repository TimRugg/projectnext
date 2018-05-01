import React, { Component } from "react";
import "./Projects.css";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import NextList from "../../components/NextList";
import ProjectCard from "../../components/ProjectCard";
import ProjectTrend from "../../components/ProjectTrend";
import CurrentTrend from "../../components/CurrentTrend";
// import TrendChart from "../../components/TrendChart";

class Projects extends Component {
  state = {
    projects: [],
    activeProjects: [],
    trendProjects: [],
    show_all_projects: false,
    show_create: false
  };

  componentDidMount() {
    // console.log("====================")
    // console.log("before loadProjects:")
    // console.log(this.state.projects);
    // console.log("====================")
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => {
        this.setState({
          projects: res.data,
          activeProjects: res.data.filter(
            project => project.status !== "Idea" && project.active
          ),
          trendProjects: res.data.filter(
            project => project.status === "In Progress"
          ),
          title: "",
          description: ""
        });
        // console.log(res.data);
        // console.log("====================");
        // console.log("projects:");
        // console.log(this.state.projects);
        // console.log("activeProjects:");
        // console.log(this.state.activeProjects);
        // console.log("trendProjects:");
        // console.log(this.state.trendProjects);
        // console.log("====================");
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormCreate = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveProject({
        title: this.state.title,
        description: this.state.description
      })
        .then(this.toggleShowCreate())
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };

  toggleShowCreate = event => {
    this.setState({
      show_create: !this.state.show_create
    });
    console.log("Show Create!", this.state.show_create);
  };

  toggleShowAll = event => {
    this.setState({
      show_all_projects: !this.state.show_all_projects
    });
  };

  render() {
    return (    
      <div className="container">
        {/* display project next list  */}
        {/* HEADING FOR SECTION: NEXT LIST */}
        <div className="row">
          <div className="col-sm-3 projects_section_heading1">
            What's Next?!
          </div>
          <div className="col-sm-9 projects_section_heading2">
            {/* buttons can go here */}
  
            <span>
            <CurrentTrend project=
            {{
              title:"Goal is the longest trend:",
              current: 7,
              // current_pct = current/longest
              current_pct: 50, 
              longest: 14,
              // longest_pct = 100% - current_pct
              longest_pct: 50 
            }} />
            </span>

          </div>
        </div>
        {/* END HEADING FOR SECTION: NEXT LIST */}
        <div className="row">
          <div className="col-sm-12">
            <NextList />
          </div>
        </div>

        {/* display project trends  */}
        {/* HEADING FOR SECTION: TRENDS */}
        <div className="row">
          <div className="col-sm-6 projects_section_heading1">
            Project Progress
          </div>
          <div className="col-sm-6 projects_section_heading2">
            {/* buttons can go here */}
          </div>
        </div>
        {/* END HEADING FOR SECTION: TRENDS */}
        {this.state.trendProjects.map(project => (
          <span key={project._id}>
            <ProjectTrend project={project} />
          </span>
        ))}

        {/* HEADING FOR SECTION: CREATE */}
        {/* Ternary function shows all projects and toggles show all button */}
        {this.state.show_create ? (
          <div>
            <div className="row">
              <div className="col-sm-6 projects_section_heading1">
                Create Project
              </div>
              <div className="col-sm-6 projects_section_heading2">
                {/* buttons can go here */}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <form>
                  <div className="form-group">
                    <label className="col-form-label">Title</label>
                    <input
                      className="form-control"
                      placeholder="Brief Description"
                      id="project_title"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      id="project_description"
                      rows="3"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      name="description"
                    />
                  </div>
                  {/* CREATE button */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleFormCreate}
                    disabled={!this.state.title}
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* display project cards  */}
        {/* HEADING FOR SECTION: PROJECT CARDS */}
        {/* Ternary function shows all projects and toggles show all button */}
        {this.state.show_all_projects ? (
          <div className="row">
            <div className="col-sm-6 projects_section_heading1">
              All Projects
            </div>
            <div className="col-sm-6 projects_section_heading2">
              <button
                type="button"
                className="btn btn-primary projects_section_btn"
                onClick={() => this.toggleShowCreate()}
              >
                Create Project
              </button>
              <button
                type="button"
                className="btn btn-primary projects_section_btn"
                onClick={() => this.toggleShowAll()}
              >
                Limit to Active
              </button>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-sm-6 projects_section_heading1">
              Active Projects
            </div>
            <div className="col-sm-6 projects_section_heading2">
              <button
                type="button"
                className="btn btn-primary projects_section_btn"
                onClick={() => this.toggleShowCreate()}
              >
                Create Project
              </button>

              <button
                type="button"
                className="btn btn-primary projects_section_btn"
                onClick={() => this.toggleShowAll()}
              >
                Show All
              </button>
            </div>
          </div>
        )}
        {/* END HEADING FOR SECTION: PROJECT CARDS */}
        <div className="row">
          <div className="col-sm-12">
            {this.state.show_all_projects ? (
              <div>
                {this.state.projects.map(project => (
                  <span key={project._id}>
                    <ProjectCard project={project} />
                  </span>
                ))}
              </div>
            ) : (
              <div>
                {this.state.activeProjects.map(project => (
                  <span key={project._id}>
                    <ProjectCard project={project} />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
