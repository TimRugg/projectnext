import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import { Card, CardImg, CardText, CardBody, CardHeader, CardFooter, CardLink,
//   CardTitle, CardSubtitle, Button } from "reactstrap";
import NextList from "../../components/NextList";
import ProjectCard from "../../components/ProjectCard";

class Project extends Component {
  state = {
    project: {},
    title: "",
    description: "",
    active: true
  };

  componentDidMount() {
    this.loadProject(this.props.match.params.id);
console.log("componentDidMount");
console.log(this.props.match.params.id);
    // API.getProject(this.props.match.params.id)
    //   .then(res => 
    //     this.setState({ 
    //       project: res.data, 
    //       title: res.data.title, 
    //       description:res.data.description, 
    //       active: res.data.active 
    //     }))
    //   .catch(err => console.log(err));
  }
  
  loadProject = () => {
    API.getProject(this.props.match.params.id)
      .then(res => {
        this.setState({ 
          project: res.data,
          id: this.props.match.params.id, 
          title: res.data.title, 
          description:res.data.description, 
          active: res.data.active 
        }),
        console.log("loadProject");
        // console.log("res.data");
        // console.log(res.data);
        console.log("res.data.title");
        console.log(res.data.title);
        console.log("this.props.match.params.id");
        console.log(this.props.match.params.id);
        console.log("res.data.description");
        console.log(res.data.description);
        console.log("res.data.active");
        console.log(res.data.active);
      })
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProject(this.props.match.params.id))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("handleInputChange event.target");
  };

  handleFormUpdate = (id, projectData) => {
    // event.preventDefault();
    // if (this.state.title) {
      API.updateProject(id, projectData)
        .then(res => this.loadProject(this.props.match.params.id))
        .catch(err => console.log(err));
    // }
    console.log("handleFormSave API.updateProject");
  };

  handleFormCreate = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveProject({
        title: this.state.title,
        description: this.state.description,
        active: this.state.active
      })
        .then(res => this.loadProject(this.props.match.params.id))
        .catch(err => console.log(err));
    }
  };
  
  render() {
    return (
      <div className="container">

        {/* Project and Action Forms  */}
        {/* HEADING FOR SECTION: PROJECT and ACTIONS */}
        <div className="row">
          {/* <div className="col-sm-1" /> */}
          <div className="col-sm-6 projects_section_heading1">
            <Link to="/">← Back to the Dashboard</Link>
          </div>
          <div className="col-sm-6 projects_section_heading2">
          {/* buttons can go here */}
          </div>
        </div>
        {/* END HEADING FOR SECTION: PROJECT AND ACTIONS */}
      
      <div className="row">
        {/* <div className="col-sm-1"></div> */}
        <div className="col-sm-4">
        <form>
            <div className="form-group">
              <label className="col-form-label">Title</label>
              <input className="form-control" placeholder="Brief Description" id="project_title" value={this.state.title} onChange={this.handleInputChange} name="title" type="text" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea className="form-control" id="project_description" rows="3" value={this.state.description} onChange={this.handleInputChange} name="description"></textarea>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox"  value={this.state.active} onChange={this.handleInputChange} name="active" />
                Active (uncheck to archive and remove project from dashboard)
              </label>
            </div>
            {/* UPDATE button */}
            <button type="submit" className="btn btn-primary" disabled={!this.state.title} 
                onClick={() => this.handleFormUpdate(this.state.id, 
                  { title: this.state.title,
                    description: this.state.description,
                    active: this.state.active }
                )}>Update</button>
            
            {/* CREATE button */}
            <button type="submit" className="btn btn-primary" onClick={this.handleFormCreate} disabled={!this.state.title}>Create</button>
            
            {/* DELETE button */}
            <button type="submit" className="btn btn-primary" onClick={() => this.deleteProject(this.state.id)}>Delete</button>
        </form>
        </div>
        <div className="col-sm-8">
        Future Home of List of Actions
        </div>
        {/* <div className="col-sm-1"></div> */}
      </div>

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

      Edit Project
      Display List of Actions
      Create Action
      Edit Action
      Delete Action
      Archive Project
      Delete Project
      Delete Project / Actions

    </div>
    );
  }
}
export default Project;
