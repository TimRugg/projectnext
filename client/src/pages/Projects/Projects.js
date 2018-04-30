import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import "./Projects.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import { Card, CardImg, CardText, CardBody, CardHeader, CardFooter, CardLink,
//   CardTitle, CardSubtitle, Button } from "reactstrap";
import NextList from "../../components/NextList";
import ProjectCard from "../../components/ProjectCard";
import ProjectTrend from "../../components/ProjectTrend";

class Projects extends Component {
  state = {
    projects: [],
    activeProjects: [],
    trendProjects: [],
    show_all_projects: false
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
        activeProjects: res.data.filter(project => project.status !== "Idea" && project.active ),
        trendProjects: res.data.filter(project => project.status == "In Progress")
        // test1: res.data[9].status,     // results Milestone
        // test2: typeof(res.data),       // results= object
        // test3: Array.isArray(res.data), // results= true
        // test4: res.data.map(project => project.status)
      });
      // console.log(res.data);
      console.log("====================");
      console.log("projects:");
      console.log(this.state.projects);
      console.log("activeProjects:");
      console.log(this.state.activeProjects);
      console.log("trendProjects:");
      console.log(this.state.trendProjects);
      // console.log(this.state.test1);
      // console.log(this.state.test2);
      // console.log(this.state.test3);
      // console.log(this.state.test4);
      console.log("====================");
      })
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description) {
      API.saveProject({
        title: this.state.title,
        description: this.state.description
      })
        .then(res => this.loadProjects())
        .catch(err => console.log(err));
    }
  };
  
  toggleShowAll = event => {
    this.setState({
      show_all_projects: !this.state.show_all_projects
    });
  }

  render() {
    return (
      <div className="container">

        {/* display project next list  */}
        {/* HEADING FOR SECTION: NEXT LIST */}
        <div className="row">
          {/* <div className="col-sm-1" /> */}
          <div className="col-sm-6 projects_section_heading1">
            What's Next?!
          </div>
          <div className="col-sm-6 projects_section_heading2">
          {/* buttons can go here */}
          </div>
        </div>
        {/* END HEADING FOR SECTION: NEXT LIST */}
      <div className="row">
        {/* <div className="col-sm-1"></div> */}
        <div className="col-sm-12">
          <NextList />
        </div>
        {/* <div className="col-sm-1"></div> */}
      </div>

        {/* display project trends  */}
        {/* HEADING FOR SECTION: TRENDS */}
        <div className="row">
          {/* <div className="col-sm-1" /> */}
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

        {/* display project cards  */}
        {/* HEADING FOR SECTION: PROJECT CARDS */}
        {/* Ternary function shows all projects and toggles show all button */}
        {this.state.show_all_projects ? (
          <div className="row">
          {/* <div className="col-sm-1" /> */}
          <div className="col-sm-6 projects_section_heading1">
            All Projects
          </div>
          <div className="col-sm-6 projects_section_heading2">
            <button type="button" className="btn btn-primary projects_section_btn">Create Project</button>
            <button type="button" className="btn btn-primary projects_section_btn" onClick={() => this.toggleShowAll()}>Limit to Active</button>
          </div>
          </div>
          ) : (
          <div className="row">
          {/* <div className="col-sm-1" /> */}
          <div className="col-sm-6 projects_section_heading1">
            Active Projects
          </div>
          <div className="col-sm-6 projects_section_heading2">
            <button type="button" className="btn btn-primary projects_section_btn">Create Project</button>
            <button type="button" className="btn btn-primary projects_section_btn" onClick={() => this.toggleShowAll()}>Show All</button>
          </div>
          </div>
          )
        }
        {/* END HEADING FOR SECTION: PROJECT CARDS */}
        <div className="row">
        {/* <div className="col-sm-1" /> */}

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
            )
          }
        </div>

        {/* <div className="col-sm-1" /> */}
        </div>
      </div>
    );
  }
}
export default Projects;
