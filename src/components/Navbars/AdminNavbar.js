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
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import { Collapse, Navbar, NavItem, Nav, Container, CardImg } from "reactstrap";

import "./style.css";

function AdminNavbar({ theme, sidenavOpen, toggleSidenav }) {
  // function that on mobile devices makes the search open
  // const openSearch = () => {
  //   document.body.classList.add("g-navbar-search-showing");
  //   setTimeout(function () {
  //     document.body.classList.remove("g-navbar-search-showing");
  //     document.body.classList.add("g-navbar-search-show");
  //   }, 150);
  //   setTimeout(function () {
  //     document.body.classList.add("g-navbar-search-shown");
  //   }, 300);
  // };
  // function that on mobile devices makes the search close
  // const closeSearch = () => {
  //   document.body.classList.remove("g-navbar-search-shown");
  //   setTimeout(function () {
  //     document.body.classList.remove("g-navbar-search-show");
  //     document.body.classList.add("g-navbar-search-hiding");
  //   }, 150);
  //   setTimeout(function () {
  //     document.body.classList.remove("g-navbar-search-hiding");
  //     document.body.classList.add("g-navbar-search-hidden");
  //   }, 300);
  //   setTimeout(function () {
  //     document.body.classList.remove("g-navbar-search-hidden");
  //   }, 500);
  // };

  return (
    <>
      <Navbar
        className={classnames(
          "navbar-top navbar-expand border-bottom",
          { "navbar-dark bg-info": theme === "dark" },
          { "navbar-light bg-secondary": theme === "light" }
        )}
      >
        <Container fluid>
          <Collapse navbar isOpen={true}>
            <CardImg
              alt="..."
              top
              className="Header_img"
              // style={{ width: "20%", height: "100%" }}
              src={process.env.PUBLIC_URL + "/logo.png"}
            />

            <Nav className="align-items-center ml-md-auto" navbar>
              <NavItem className="d-xl-none">
                <div
                  className={classnames(
                    "pr-3 ml-3 sidenav-toggler",
                    { active: sidenavOpen },
                    { "sidenav-toggler-dark": theme === "dark" }
                  )}
                  onClick={toggleSidenav}
                >
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                    <i className="sidenav-toggler-line" />
                  </div>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: "dark",
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default AdminNavbar;
