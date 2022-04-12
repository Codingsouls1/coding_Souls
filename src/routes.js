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
import Admin from "views/pages/Admin/Admin";
import AllStudent from "views/pages/AllStudent/AllStudent";
import Calendar from "views/pages/Calendar.js";
import Contactus from "views/pages/ContactUs/Contactus";
import Cordinator from "views/pages/Cordinator/Cordinator";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import Register from "views/pages/Register/Register";
// import Login from "views/pages/examples/Login.js";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "ni ni-shop text-primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "Admin Login",
    path: "/login",
    icon: "ni ni-single-02 text-green",
    component: Admin,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/admin",
  },

  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "/cordinator",
    name: "Co-ordinator",
    icon: "ni ni-circle-08 text-red",
    component: Cordinator,
    layout: "/admin",
  },
  {
    path: "/all_students",
    name: "All Students",
    icon: "ni ni-single-02 text-red",
    component: AllStudent,
    layout: "/admin",
  },
  {
    path: "/contactus",
    name: "Contact Us",
    icon: "ni ni-chat-round text-yellow",
    component: Contactus,
    layout: "/admin",
  },
];

export default routes;
