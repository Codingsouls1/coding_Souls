// /*!

// =========================================================
// * Argon Dashboard PRO React - v1.2.1
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Modal,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Label,
} from "reactstrap";

//React Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Api Call
import { getAllEvents } from "api/Calendar";
import { createAllEvents } from "api/Calendar";
import { editAllEvents } from "api/Calendar";
import { deleteAllEvents } from "api/Calendar";

//Import react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let calendar;

function CalendarView() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [events, setEvents] = React.useState(null);
  const [alert, setAlert] = React.useState(null);
  const [modalAdd, setModalAdd] = React.useState(false);
  const [modalChange, setModalChange] = React.useState(false);
  const [radios, setRadios] = React.useState(null);
  const [eventId, setEventId] = React.useState(null);
  const [eventTitle, setEventTitle] = React.useState(null);
  const [eventDescription, setEventDescription] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [event, setEvent] = React.useState(null);
  const [currentDate, setCurrentDate] = React.useState(null);
  const calendarRef = React.useRef(null);
  const [check, setCheck] = React.useState(true);

  const createCalendar = () => {
    calendar = new Calendar(calendarRef.current, {
      plugins: [interaction, dayGridPlugin],
      initialView: "dayGridMonth",
      selectable: true,
      headerToolbar: "",

      // Add new event
      select: (info) => {
        console.log("info", info);
        setModalAdd(true);
        setStartDate(startDate);
        setEndDate(endDate);
        setRadios("bg-info");
      },

      // Edit calendar event action
      eventClick: ({ event }) => {
        console.log("event", event);
        setEventId(event.id);
        setEventTitle(event.title);
        setDescription(event.extendedProps.description);
        setRadios("exams");
        setEvent(event);
        setModalChange(true);
      },
    });
    calendar.render();
    setCurrentDate(calendar.view.title);
  };

  const changeView = (newView) => {
    calendar.changeView(newView);
    setCurrentDate(calendar.view.title);
  };

  React.useEffect(() => {
    //ffy eslint-disable-next-line
    createCalendar();
    getEvents();
  }, [check]);

  //Get All Events
  const getEvents = async () => {
    const allEvents = await getAllEvents();
    const array = allEvents.map((even) => {
      console.log(even);
      return calendar.addEvent({
        title: even.event_name,
        start: even.start_date,
        end: even.end_date,
        className: even.event_type,
        description: even.description,
        id: even._id,
      });
    });
    setEvents(array);
  };

  //Add Events
  const addNewEvent = async (e) => {
    e.preventDefault();
    const row = {
      event_name: eventTitle,
      start_date: new Date(startDate),
      end_date: new Date(endDate),
      description: description,
      event_type: radios,
    };
    try {
      if (localStorage.getItem("token")) {
        await createAllEvents(row);
        toast.success("Evnet Added Successfully");
        if (check === true) {
          setCheck(false);
        } else {
          setCheck(true);
        }
        setModalAdd(false);
        // setEvents(newEvents);
        setStartDate(undefined);
        setEndDate(undefined);
        setRadios("bg-info");
        setEventTitle(undefined);
      } else {
        return toast.error("Your are not Login as Admin!");
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
  };

  //Update Events
  const changeEvent = async () => {
    const row = {
      event_name: eventTitle,
      start_date: new Date(startDate),
      end_date: new Date(endDate),
      description: description,
      event_type: radios,
    };
    try {
      if (localStorage.getItem("token")) {
        const updateEvents = await editAllEvents(eventId, row);
        setEvents(updateEvents);
        toast.success("Events Updated Successfully");
        if (check === true) {
          setCheck(false);
        } else {
          setCheck(true);
        }
      } else {
        return toast.error("You are not Login as Admin!");
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
    setModalChange(false);
    setRadios("bg-info");
    setEventTitle(undefined);
    setEventDescription(undefined);
    setEventId(undefined);
    setEvent(undefined);
  };

  //Delete Events Confirm Box
  const deleteEventSweetAlert = () => {
    setAlert(
      <ReactBSAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => {
          setAlert(false);
          setRadios("bg-info");
          setEventTitle(undefined);
          setEventDescription(undefined);
          setEventId(undefined);
        }}
        onCancel={() => deleteEvent()}
        confirmBtnCssClass="btn-secondary"
        cancelBtnBsStyle="danger"
        confirmBtnText="Cancel"
        cancelBtnText="Yes, delete it"
        showCancel
        btnSize=""
      >
        You won't be able to revert this!
      </ReactBSAlert>
    );
  };

  //Delete Events
  const deleteEvent = async () => {
    try {
      if (localStorage.getItem("token")) {
        const deleEvents = await deleteAllEvents(eventId);
        if (check === true) {
          setCheck(false);
        } else {
          setCheck(true);
        }
        setEvent(undefined);
        setAlert(
          <ReactBSAlert
            success
            style={{ display: "block", marginTop: "-100px" }}
            title="Success"
            onConfirm={() => setAlert(null)}
            onCancel={() => setAlert(null)}
            confirmBtnBsStyle="primary"
            confirmBtnText="Ok"
            btnSize=""
          ></ReactBSAlert>
        );
        setEvents(deleEvents);
        setCheck(true);
      } else {
        return toast.error("You are not Login as Admin!");
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
    setModalChange(false);
    setRadios("bg-info");
    setEventTitle(undefined);
    setEventDescription(undefined);
    setEventId(undefined);
    setEvent(undefined);
  };

  return (
    <>
      {alert}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="header header-dark bg-info pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0 mr-1">
                  {currentDate}
                </h6>
                <Breadcrumb
                  className="d-none d-md-inline-block ml-lg-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Dashboard
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    Calendar
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="mt-3 mt-md-0 text-md-right" lg="6">
                <Button
                  className="fullcalendar-btn-prev btn-neutral"
                  color="default"
                  onClick={() => {
                    calendar.next();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-left" />
                </Button>
                <Button
                  className="fullcalendar-btn-next btn-neutral"
                  color="default"
                  onClick={() => {
                    calendar.prev();
                  }}
                  size="sm"
                >
                  <i className="fas fa-angle-right" />
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="month"
                  onClick={() => changeView("dayGridMonth")}
                  size="sm"
                >
                  Month
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicWeek"
                  onClick={() => changeView("dayGridWeek")}
                  size="sm"
                >
                  Week
                </Button>
                <Button
                  className="btn-neutral"
                  color="default"
                  data-calendar-view="basicDay"
                  onClick={() => changeView("dayGridDay")}
                  size="sm"
                >
                  Day
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card className="card-calendar">
              <CardHeader>
                <h5 className="h3 mb-0">Calendar</h5>
              </CardHeader>
              <CardBody className="p-0">
                <div
                  className="calendar"
                  data-toggle="calendar"
                  id="calendar"
                  ref={calendarRef}
                />
              </CardBody>
            </Card>
            <Modal
              isOpen={modalAdd}
              toggle={() => setModalAdd(false)}
              className="modal-dialog-centered modal-secondary"
            >
              <div className="modal-body">
                <form className="new-event--form" onSubmit={addNewEvent}>
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative new-event--title"
                      placeholder="Event Title"
                      type="text"
                      onChange={(e) => setEventTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example-date-input"
                    >
                      From
                    </label>
                    <DatePicker
                      className="p-2 w-100 border border-light"
                      showTimeSelect
                      dateFormat="yyyy MMMM, dd h:mm aa"
                      selected={startDate}
                      selectsStart
                      startDate={startDate}
                      onChange={(date) => setStartDate(date)}
                      strictParsing
                      value={startDate}
                      required
                    />
                    <label
                      className="form-control-label"
                      htmlFor="example-date-input"
                    >
                      To
                    </label>
                    <DatePicker
                      className="p-2 w-100 border border-light"
                      showTimeSelect
                      dateFormat="yyyy MMMM, dd h:mm aa"
                      selected={endDate}
                      selectsStart
                      startDate={endDate}
                      onChange={(date) => setEndDate(date)}
                      strictParsing
                      value={endDate}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="form-control-label">Description</label>
                    <textarea
                      className="form-control-alternative new-event--title w-100 descrip"
                      placeholder="Description"
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <label className="form-control-label d-block mb-3">
                      Status color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                  <div className="modal-footer">
                    <Button
                      className="new-event--add"
                      color="primary"
                      type="submit"
                    >
                      Add event
                    </Button>
                    <Button
                      className="ml-auto"
                      color="link"
                      type="button"
                      onClick={() => setModalAdd(false)}
                    >
                      Close
                    </Button>
                  </div>
                </form>
              </div>
            </Modal>
            <Modal
              isOpen={modalChange}
              toggle={() => setModalChange(false)}
              className="modal-dialog-centered modal-secondary"
            >
              <div className="modal-body">
                <Form className="edit-event--form">
                  <FormGroup>
                    <label className="form-control-label">Event title</label>
                    <Input
                      className="form-control-alternative edit-event--title"
                      placeholder="Event Title"
                      type="text"
                      defaultValue={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label
                      className="form-control-label"
                      htmlFor="example-date-input"
                    >
                      From
                    </Label>
                    <DatePicker
                      className="p-2 endDate"
                      showTimeSelect
                      dateFormat="yyyy MMMM, dd h:mm aa"
                      selected={startDate}
                      selectsStart
                      startDate={startDate}
                      onChange={(date) => setStartDate(date)}
                      strictParsing
                      value={startDate}
                      required
                    />
                    <Label
                      className="form-control-label"
                      htmlFor="example-date-input"
                    >
                      To
                    </Label>
                    <DatePicker
                      className="p-2 endDate"
                      showTimeSelect
                      dateFormat="yyyy MMMM, dd h:mm aa"
                      // dateFormat="'YYYY-MM-dd', h:mm"
                      selected={endDate}
                      selectsStart
                      startDate={endDate}
                      onChange={(date) => setEndDate(date)}
                      strictParsing
                      value={endDate}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <label className="form-control-label">Description</label>
                    <Input
                      className="form-control-alternative edit-event--description textarea-autosize"
                      placeholder="Event Desctiption"
                      type="textarea"
                      defaultValue={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <i className="form-group--bar" />
                  </FormGroup>
                  <input className="edit-event--id" type="hidden" />
                  <FormGroup className="mb-0">
                    <label className="form-control-label d-block mb-3">
                      Status color
                    </label>
                    <ButtonGroup
                      className="btn-group-toggle btn-group-colors event-tag"
                      data-toggle="buttons"
                    >
                      <Button
                        className={classnames("bg-info", {
                          active: radios === "bg-info",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-info")}
                      />
                      <Button
                        className={classnames("bg-warning", {
                          active: radios === "bg-warning",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-warning")}
                      />
                      <Button
                        className={classnames("bg-danger", {
                          active: radios === "bg-danger",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-danger")}
                      />
                      <Button
                        className={classnames("bg-success", {
                          active: radios === "bg-success",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-success")}
                      />
                      <Button
                        className={classnames("bg-default", {
                          active: radios === "bg-default",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-default")}
                      />
                      <Button
                        className={classnames("bg-primary", {
                          active: radios === "bg-primary",
                        })}
                        color=""
                        type="button"
                        onClick={() => setRadios("bg-primary")}
                      />
                    </ButtonGroup>
                  </FormGroup>
                </Form>
              </div>
              <div className="modal-footer">
                <Button color="primary" onClick={changeEvent}>
                  Update
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setModalChange(false);
                    deleteEventSweetAlert();
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="ml-auto"
                  color="link"
                  onClick={() => setModalChange(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CalendarView;
