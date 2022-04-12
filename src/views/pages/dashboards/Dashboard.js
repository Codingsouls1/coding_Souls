/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  UncontrolledCarousel,
  Row,
  Col,
  CardImg,
  Modal,
  ModalBody,
  Button,
  Nav,
  NavLink,
  NavItem,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

import "./style.css";

import { useHistory } from "react-router-dom";
import { getAllEvents } from "api/Calendar";

function Dashboard() {
  const history = useHistory();
  const [editing, setEditing] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("1");
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    setEditing(true);
    getEvents();
  }, []);

  const getEvents = async () => {
    const allEvents = await getAllEvents();
    console.log("all", allEvents);
    setEvents(allEvents);
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const redirect = () => {
    history.push("/admin/register");
  };

  return (
    <>
      <SimpleHeader name="Dashboard" />
      <Container className="mt--6" fluid>
        <Card>
          <CardBody>
            <UncontrolledCarousel
              className="carousel"
              items={[
                {
                  key: 1,
                  src: `${
                    process.env.PUBLIC_URL + "/180503113442_DSC_0014.jpg"
                  }`,
                },
                {
                  key: 2,
                  src: `${
                    process.env.PUBLIC_URL +
                    "/Campus View of Sushila Devi Bansal College of Engineering Indore_Campus-View.jpg"
                  }`,
                },
                {
                  key: 3,
                  src: `${process.env.PUBLIC_URL + "/2021-03-15.jpg"}`,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Container>
      <Container className="mt-0" fluid>
        <Row>
          <Col lg="4">
            <div className="card-wrapper">
              <Card>
                <Col align="center">
                  <h2 className="mt-2">Coding Souls</h2>
                  <span>(Until Salvation)</span>
                  <CardImg
                    alt="..."
                    src={
                      process.env.PUBLIC_URL +
                      "/codinsoulslogo-removebg-preview.png"
                    }
                    top
                    className="p-4"
                    style={{ width: "80%", height: "100%" }}
                  />
                </Col>
                <CardBody className="mt-0"></CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                <h1>Details</h1>
              </CardHeader>
              <CardBody>
                <Col className="mt-2">
                  <h2 className="Vision">Vision</h2>
                  <h4>
                    To provide the skills, confidence and opportunity to the
                    students to shape the world by solving society problems
                    through coding skills.
                  </h4>
                  <br />
                </Col>
                <Col>
                  <h2 className="Vision">Mission</h2>
                  <h4>
                    To develop the ethical coders on the latest technology
                  </h4>
                  <br />
                </Col>
                <Col>
                  <h2 className="Vision">Core Values</h2>
                  <h4>
                    Believe in learning together in friendly environment Inspire
                    discovery and invention through play with work ethics Accept
                    the transformation and respect all
                  </h4>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-0" fluid>
        <Row>
          <Col lg="4">
            <div className="card-wrapper">
              <Card>
                <Col align="center">
                  <h2 className="mt-2">Coding Souls</h2>
                  <span>(Until Salvation)</span>
                  <CardImg
                    alt="..."
                    src={
                      process.env.PUBLIC_URL +
                      "/codinsoulslogo-removebg-preview.png"
                    }
                    top
                    className="p-4"
                    style={{ width: "80%", height: "100%" }}
                  />
                </Col>
                <CardBody className="mt-0"></CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <Card>
              <CardHeader>
                <h1>Details</h1>
              </CardHeader>
              <CardBody>
                <Col className="mt--4">
                  <h2 className="Objective">Objective</h2>
                  <ul>
                    <li>To Achieve Higher Logical & Structural Thinking.</li>
                    <li>
                      To Create Incubation Environment for Skill Development.
                    </li>
                    <li>
                      Develop Creative Thinking, Constructive Knowledge &
                      Develop Innovative Software Product.
                    </li>
                    <li>
                      To motivate students to learn programming with enthusiasm.
                    </li>
                    <li>
                      To provide real-world experience of coding to solve a
                      problem.
                    </li>
                  </ul>
                  <br />
                </Col>
                <Col className="mt--3">
                  <h2 className="Objective">Who can join the team?</h2>
                  <ul>
                    <li>
                      Anybody can be a part of this club, who Are interested in
                      coding.
                    </li>
                    <li>Needs to take part in various coding events.</li>
                    <li>Wants to learn coding with fun.</li>
                    <li>
                      Likes to get the latest updates of coding competitions.
                    </li>
                  </ul>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          className="modal-dialog-centered"
          isOpen={editing}
          toggle={() => setEditing(false)}
          style={activeTab === "2" ? { height: "50vh" } : null}
          size={activeTab === "1" ? "sm" : "lg"}
        >
          <div className="modal-header">
            <Row>
              <Col>
                <Nav pills style={{ cursor: "pointer" }}>
                  <NavItem>
                    <NavLink
                      className={activeTab === "1" ? "active" : ""}
                      onClick={() => setActiveTab("1")}
                    >
                      Notification
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col>
                <Nav pills style={{ cursor: "pointer" }}>
                  <NavItem>
                    <NavLink
                      className={activeTab === "2" ? "active" : ""}
                      onClick={() => setActiveTab("2")}
                    >
                      New Events
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setEditing(false)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <ModalBody>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <h2 activeTab={activeTab}>
                  We are oganising the Hackathon on Date 24/04/2022, So if you
                  are interested then register here
                </h2>
                <Button color="success" onClick={redirect}>
                  Register
                </Button>
              </TabPane>
              <TabPane tabId="2" className="student_table text-center">
                <Table bordered responsive>
                  <thead>
                    <tr>
                      <th>
                        <h3>S No.</h3>
                      </th>
                      <th>
                        <h3>Event</h3>
                      </th>
                      <th>
                        <h3>Start Date</h3>
                      </th>
                      <th>
                        <h3>End Date</h3>
                      </th>
                      <th>
                        <h3>Description</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events !== null && (
                      <>
                        {events.map((even, index) => {
                          return (
                            <>
                              <tr>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <h4>{even.event_name}</h4>
                                </td>
                                <td>
                                  <h4>{even.start_date.split("T")[0]}</h4>
                                </td>
                                <td>
                                  <h4>{even.end_date.split("T")[0]} </h4>
                                </td>
                                <td>
                                  <h4>{even.description} </h4>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </>
                    )}
                  </tbody>
                </Table>
              </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
      </Container>
    </>
  );
}

export default Dashboard;
