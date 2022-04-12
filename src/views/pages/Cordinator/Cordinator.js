import React from "react";

//import reactstrap
import { Card, CardBody, Container, Row, Col, CardImg } from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

function Cordinator() {
  const [staffDetails] = React.useState([
    {
      key: 1,
      name: "Prof. Arjun Singh Parihar",
      postion: "Chairman",
    },
    {
      key: 2,
      name: "Prof. Atul Agarwal",
      postion: "Coordinator",
    },
    {
      key: 3,
      name: "Prof. Sonal Yadav",
      postion: "Member",
    },
    {
      key: 4,
      name: "Prof. Nandini Sharma",
      postion: "Member",
    },
    {
      key: 5,
      name: "Mr. Anmol Agarwal",
      postion: "Student Representative",
    },
    {
      key: 6,
      name: "Mr. Chinmay Raiker",
      postion: "Student Representative",
    },
    {
      key: 7,
      name: "Mr. Sanket Patil",
      postion: "Student Representative",
    },
    {
      key: 8,
      name: "Mr. Rohit Anjan",
      postion: "Student Representative",
    },
    {
      key: 9,
      name: "Mr. Tanuj Singh Bhadoria",
      postion: "Student Representative",
    },
    {
      key: 10,
      name: "Mr. Shilpi Sonone",
      postion: "Student Representative",
    },
  ]);

  return (
    <>
      <SimpleHeader name="Co-ordinator" />
      <Container className="mt--6" fluid>
        <Row className="card-wrapper">
          {staffDetails.map((staff) => {
            return (
              <>
                <Col md="4" key={staff.key}>
                  <Card>
                    <CardImg
                      alt="..."
                      src={
                        process.env.PUBLIC_URL +
                        "/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                      }
                      top
                      className="p-4"
                    />
                    <CardBody className="mt--6">
                      <Row>
                        <Col align="center">
                          <h4 className="mt-3 mb-1">Name</h4>
                          <span className="text-md">{staff.name}</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col align="center">
                          <h4 className="mt-3 mb-1">Position</h4>
                          <span className="text-md">{staff.postion}</span>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Cordinator;
