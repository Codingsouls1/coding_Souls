import React from "react";

//import reactstrap
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardHeader,
  CardImg,
  ListGroup,
  ListGroupItem,
  TabContent,
  TabPane,
} from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Contactus() {
  return (
    <>
      <SimpleHeader name="Contact Us" />
      <Container className="mt--6" fluid>
        <Row>
          <Col lg="4">
            <div className="card-wrapper">
              <Card>
                <Col align="center">
                  <CardImg
                    alt="..."
                    src={process.env.PUBLIC_URL + "/180503113442_DSC_0014.jpg"}
                    top
                    className="p-4"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <CardBody className="mt--2">
                  <Row>
                    <Col align="center">
                      <h4 className="mt-0 mb-1">Collage Name</h4>
                      <span className="text-md">
                        Sushila Devi Bansal College
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col align="center">
                      <h4 className="mt-3 mb-1">Affiliated Board</h4>
                      <span className="text-md">Rgpv</span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-wrapper">
              <Card>
                <CardHeader>
                  <h1>Details</h1>
                </CardHeader>
                <CardBody>
                  <TabContent>
                    <TabPane>
                      <ListGroup flush>
                        <Row className="mt-4">
                          <Col>
                            <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                              <div className="checklist-item checklist-item-info">
                                <div className="checklist-info">
                                  <h5 className="checklist-title mb-0">
                                    Address
                                  </h5>
                                  <small>
                                    AB Road, Umariya, Near Rau, Indore, Madhya
                                    Pradesh 453331
                                  </small>
                                </div>
                              </div>
                            </ListGroupItem>
                          </Col>
                        </Row>
                        <Row className="mt-4 mb-4">
                          <Col md="4">
                            <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                              <div className="checklist-item checklist-item-success">
                                <div className="checklist-info">
                                  <h5 className="checklist-title mb-0">
                                    Email
                                  </h5>
                                  <small>coding.souls@sdbc.ac.in</small>
                                </div>
                              </div>
                            </ListGroupItem>
                          </Col>
                          <Col>
                            <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                              <div className="checklist-item checklist-item-success">
                                <div className="checklist-info">
                                  <h5 className="checklist-title mb-0">
                                    Contact No.
                                  </h5>
                                  <small>+91-9827314181</small>
                                </div>
                              </div>
                            </ListGroupItem>
                          </Col>
                          <Col>
                            <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                              <div className="checklist-item checklist-item-success">
                                <div className="checklist-info">
                                  <h5 className="checklist-title mb-0">
                                    Student Contact No.
                                  </h5>
                                  <small>+91-9131399266</small>
                                </div>
                              </div>
                            </ListGroupItem>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="4">
                            <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                              <div className="checklist-item checklist-item-success">
                                <div className="checklist-info">
                                  <h5 className="checklist-title mb-0">
                                    Student Email
                                  </h5>
                                  <small>anmolagarwal873@gmail.com</small>
                                </div>
                              </div>
                            </ListGroupItem>
                          </Col>
                        </Row>
                      </ListGroup>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contactus;
