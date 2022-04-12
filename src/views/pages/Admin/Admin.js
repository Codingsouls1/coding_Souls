import React from "react";

//import reactstrap
import {
  Card,
  CardBody,
  Input,
  Container,
  Row,
  Col,
  Button,
  Form,
  CardFooter,
  CardHeader,
} from "reactstrap";

// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";

//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminLogin } from "api/Login";

function Admin() {
  const [admin, setAdmin] = React.useState({
    email: "",
    password: "",
  });

  //Values
  const handleChange = (name) => (event) => {
    setAdmin({ ...admin, [name]: event.target.value });
  };

  //Final submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await adminLogin(admin);
      console.log("login", login);
      if (login.token) {
        toast.success("Admin Login Successfull");
        localStorage.setItem("token", login.token);
      }
    } catch (err) {
      toast.error("Admin login Failed!");
    }
  };

  return (
    <>
      <SimpleHeader name="Login" />
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
      <Container className="mt--6 d-flex justify-content-center">
        <Col lg="6">
          <Form onSubmit={handleFormSubmit}>
            <Card>
              <CardHeader>
                <h1>Login</h1>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="4" lg="12">
                    <label
                      className="form-control-label"
                      htmlFor="example4cols2Input"
                    >
                      Email
                    </label>
                    <Input
                      id="example4cols2Input"
                      placeholder="Email"
                      type="email"
                      onChange={handleChange("email")}
                      value={admin.email}
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="4" lg="12">
                    <label
                      className="form-control-label"
                      htmlFor="example4cols2Input"
                    >
                      Password
                    </label>
                    <Input
                      id="example4cols2Input"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange("password")}
                      value={admin.password}
                      required
                    />
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary">
                  Login
                </Button>
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Container>
    </>
  );
}

export default Admin;
