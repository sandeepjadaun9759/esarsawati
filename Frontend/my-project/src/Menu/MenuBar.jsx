import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./MenuBar.css";

// Ionicons
import {
  homeOutline,
  documentTextOutline,
  cashOutline,
  videocamOutline,
  checkmarkDoneOutline,
  clipboardOutline,
  trophyOutline,
  calendarOutline,
  cardOutline,
  timeOutline,
  libraryOutline,
  busOutline,
  bedOutline,
  personOutline,
  bookOutline,
  logOutOutline
} from "ionicons/icons";

// Pages
import Home from "./Home";
import Notes from "./Notes";
import Fees from "./Fees";
import OnlineClass from "./OnlineClass";
import Attendance from "./Attendance";
import HomeWork from "./HomeWork";
import ExamResult from "./ExamResult";
import ExamAnnualSchedule from "./ExamAnnualSchedule";
import ExamHallTicket from "./ExamHallTicket";
import Routine from "./Routine";
import Library from "./Library";
import Transport from "./Transport";
import Hostel from "./Hostel";
import Teachers from "./Teachers";
import Subjects from "./Subjects";
import Logout from "./Logout";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();

  const buttons = [
    { name: "Home", icon: homeOutline, path: "/" },
    { name: "Notes", icon: documentTextOutline, path: "/notes" },
    { name: "Fees", icon: cashOutline, path: "/fees" },
    { name: "Online Class", icon: videocamOutline, path: "/online-class" },
    { name: "Attendance", icon: checkmarkDoneOutline, path: "/attendance" },
    { name: "Home Work", icon: clipboardOutline, path: "/home-work" },
    { name: "Exam Result", icon: trophyOutline, path: "/exam-result" },
    { name: "Annual Schedule", icon: calendarOutline, path: "/exam-annual-schedule" },
    { name: "Hall Ticket", icon: cardOutline, path: "/exam-hall-ticket" },
    { name: "Routine", icon: timeOutline, path: "/routine" },
    { name: "Library", icon: libraryOutline, path: "/library" },
    { name: "Transport", icon: busOutline, path: "/transport" },
    { name: "Hostel", icon: bedOutline, path: "/hostel" },
    { name: "Teachers", icon: personOutline, path: "/teachers" },
    { name: "Subjects", icon: bookOutline, path: "/subjects" },
    { name: "Logout", icon: logOutOutline, path: "/logout" },
  ];

  return (
    <div className="sidebar">
      {buttons.map((btn, idx) => (
        <IonButton
          key={idx}
          className={`sidebar-btn ${location.pathname === btn.path ? "active-btn" : ""}`}
          onClick={() => history.push(btn.path)}
        >
          <IonIcon icon={btn.icon} slot="start" />
          <span className="btn-text">{btn.name}</span>
        </IonButton>
      ))}
    </div>
  );
};

const MenuBar = () => {
  return (
    <Router>
      <IonPage className="menu-layout">
        <Navigation />
        <IonContent className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notes" component={Notes} />
            <Route path="/fees" component={Fees} />
            <Route path="/online-class" component={OnlineClass} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/home-work" component={HomeWork} />
            <Route path="/exam-result" component={ExamResult} />
            <Route path="/exam-annual-schedule" component={ExamAnnualSchedule} />
            <Route path="/exam-hall-ticket" component={ExamHallTicket} />
            <Route path="/routine" component={Routine} />
            <Route path="/library" component={Library} />
            <Route path="/transport" component={Transport} />
            <Route path="/hostel" component={Hostel} />
            <Route path="/teachers" component={Teachers} />
            <Route path="/subjects" component={Subjects} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </IonContent>
      </IonPage>
    </Router>
  );
};

export default MenuBar;
