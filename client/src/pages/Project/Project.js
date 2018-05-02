import React, { Component } from "react";
import "./Project.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import NextList from "../../components/NextList";

class Project extends Component {
  state = {
    project: {},
    title: "",
    description: "",
    active: true
  };

  componentDidMount() {
    this.loadProject(this.props.match.params.id);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    console.log("componentDidMount");
    console.log(this.props.match.params.id);
  }

  loadProject = () => {
    API.getProject(this.props.match.params.id)
      .then(res => {
        this.setState({
          project: res.data,
          id: this.props.match.params.id,
          title: res.data.title,
          description: res.data.description,
          active: res.data.active
        });
      })
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProject(this.props.match.params.id))
      .then(this.props.history.push("/"))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormUpdate = event => {
    event.preventDefault();

    const id = this.props.match.params.id;

    const data = {
      title: this.state.title,
      description: this.state.description,
      active: this.state.active
    };

    API.updateProject(id, data)
      .then(res => {
        console.log("Res: " + res.data);
        this.loadProject(this.props.match.params.id);
      })
      .catch(err => console.log(err));
    // }
    console.log("handleFormSave API.updateProject");
  };

  render() {
    return (
      <div className="container">
        {/* Project and Action Forms  */}
        {/* HEADING FOR SECTION: PROJECT and ACTIONS */}
        <div className="row">
          <div className="col-sm-6 projects_section_heading1">
            Update Project
          </div>
          <div className="col-sm-6 projects_section_heading2">
            <Link
              type="button"
              className="btn btn-primary projects_section_btn"
              to="/"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
        {/* END HEADING FOR SECTION: PROJECT AND ACTIONS */}
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <form className="updateForm">
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
                <label className="col-form-label">Description</label>
                <textarea
                  className="form-control"
                  id="project_description"
                  rows="4"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                />
              </div>
              <div className="form-check form-group">
                <label className="form-check-label col-form-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={this.state.active}
                    onChange={this.handleInputChange}
                    name="active"
                  />
                  Active (uncheck to archive and remove project from dashboard)
                </label>
              </div>

              <div className="updateFormButtons row">
                <div className="col-sm-6">
                  {/* UPDATE button */}
                  <button
                    type="submit"
                    className="btn btn-primary updateFormButtonsbtn"
                    disabled={!this.state.title}
                    onClick={this.handleFormUpdate}
                  >
                    Update
                  </button>
                </div>
                <div className="col-sm-6">
                  {/* DELETE button */}
                  <button
                    type="submit"
                    className="btn btn-primary updateFormButtonsbtn"
                    onClick={() => this.deleteProject(this.state.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* HEADING FOR SECTION: LIST OF ACTIONS */}
        <div className="row">
          <div className="col-sm-6 projects_section_heading1">Actions</div>
          <div className="col-sm-6 projects_section_heading2">
            <button
              type="button"
              className="btn btn-primary projects_section_btn"
            >
              Create Action
            </button>
          </div>
        </div>
        {/* END HEADING FOR SECTION: LIST OF ACTIONS */}
        <div className="col-sm-2" />
        <div className="col-sm-8">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Action</th>
                <th scope="col">Complete?</th>
                <th scope="col">Complete Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-dark">
                <th scope="row">1</th>
                <td>Make appointment to review list.</td>
                <td>Yes</td>
                <td>4/21/2018</td>
              </tr>
              <tr className="table-dark">
                <th scope="row">2</th>
                <td>Go to store and buy needed supplies.</td>
                <td>No</td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        {/* display project next list  */}
        {/* HEADING FOR SECTION: NEXT LIST */}
        <div className="row">
          <div className="col-sm-6 projects_section_heading1">
            What's Next?!
          </div>
          <div className="col-sm-6 projects_section_heading2">
            {/* buttons can go here */}
          </div>
        </div>
        {/* END HEADING FOR SECTION: NEXT LIST */}
        <div className="row">
          <div className="col-sm-12">
            <NextList />
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
