import React from "react";
import {
  CardBody,
  Card,
  Container,
  Table,
  Row,
  Col,
  CardHeader,
} from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";
import { allStudents } from "api/Register";

//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";

function AllStudent() {
  const [alStudents, setAlStudent] = React.useState(null);
  console.log("aa", alStudents);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllStudents();
    } else {
      return toast.error("You are not login as Admin!");
    }
  }, []);

  const getAllStudents = async () => {
    const students = await allStudents();
    console.log("res", students);
    setAlStudent(students);
  };

  return (
    <>
      <SimpleHeader name="All Student" />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Container className="mt--6">
        <Card>
          <CardHeader>
            <h1>All Students</h1>
          </CardHeader>
          <CardBody className="student_table text-center">
            <Row>
              <Col>
                <div className="card-wrapper">
                  <Card>
                    <CardBody>
                      <Table bordered responsive>
                        <thead>
                          <tr>
                            <th>
                              <h3>S No.</h3>
                            </th>
                            <th>
                              <h3>Name</h3>
                            </th>
                            <th>
                              <h3>Enrollment No.</h3>
                            </th>
                            <th>
                              <h3>College</h3>
                            </th>
                            <th>
                              <h3>Branch</h3>
                            </th>
                            <th>
                              <h3>Section</h3>
                            </th>
                            <th>
                              <h3>Year</h3>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {alStudents !== null && (
                            <>
                              {alStudents.map((students, index) => {
                                return (
                                  <>
                                    <tr>
                                      <th scope="row">{index + 1} </th>
                                      <td>
                                        <h4>
                                          {students.first_name}{" "}
                                          {students.last_name}
                                        </h4>
                                      </td>

                                      <td>
                                        <h4>{students.enrollment_no}</h4>
                                      </td>

                                      <td>
                                        <h4>{students.college} </h4>
                                      </td>

                                      <td>
                                        <h4>{students.branch} </h4>
                                      </td>

                                      <td>
                                        <h4>{students.section} </h4>
                                      </td>

                                      <td>
                                        <h4>{students.year} </h4>
                                      </td>
                                    </tr>
                                  </>
                                );
                              })}
                            </>
                          )}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default AllStudent;
