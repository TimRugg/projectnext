import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Card, CardImg, CardText, CardBody, CardHeader, CardFooter, CardLink,
  CardTitle, CardSubtitle, Button } from "reactstrap";

class Projects extends Component {
  state = {
    projects: [],
    title: "",
    description: ""
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res =>
        this.setState({ projects: res.data, description: "" })
      )
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Button
                disabled={!(this.state.title && this.state.description)}
                onClick={this.handleFormSubmit}
              >
                Submit Project
              </Button>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12"> */}
            {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project._id}>
                    <Card>
                      <CardHeader>P001</CardHeader>
                      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                      <CardTitle>{project.title}</CardTitle>
                      <CardLink>
                        <Link to={"/projects/" + project._id}>Link</Link>
                      </CardLink>
                      <CardBody>
                        <CardText>{project.description}</CardText>
                        <CardFooter>Status: Idea 11/12/2018</CardFooter>
                      </CardBody>
                    </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          {/* </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Projects;
