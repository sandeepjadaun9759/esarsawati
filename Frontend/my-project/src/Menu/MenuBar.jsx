import React, { useRef, useState, useEffect } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { Route, useHistory, useLocation } from "react-router-dom";

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
  logOutOutline,
} from "ionicons/icons";

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

import "./MenuBar.css";

const Navigation = ({ closeMenu }) => {
  const history = useHistory();
  const location = useLocation();

  const buttons = [
    { name: "Home", icon: homeOutline, path: "/menubar" },
    { name: "Notes", icon: documentTextOutline, path: "/menubar/notes" },
    { name: "Fees", icon: cashOutline, path: "/menubar/fees" },
    { name: "Online Class", icon: videocamOutline, path: "/menubar/online-class" },
    { name: "Attendance", icon: checkmarkDoneOutline, path: "/menubar/attendance" },
    { name: "Home Work", icon: clipboardOutline, path: "/menubar/home-work" },
    { name: "Exam Result", icon: trophyOutline, path: "/menubar/exam-result" },
    { name: "Annual Schedule", icon: calendarOutline, path: "/menubar/exam-annual-schedule" },
    { name: "Hall Ticket", icon: cardOutline, path: "/menubar/exam-hall-ticket" },
    { name: "Routine", icon: timeOutline, path: "/menubar/routine" },
    { name: "Library", icon: libraryOutline, path: "/menubar/library" },
    { name: "Transport", icon: busOutline, path: "/menubar/transport" },
    { name: "Hostel", icon: bedOutline, path: "/menubar/hostel" },
    { name: "Teachers", icon: personOutline, path: "/menubar/teachers" },
    { name: "Subjects", icon: bookOutline, path: "/menubar/subjects" },
    { name: "Logout ", icon: logOutOutline, path: "/menubar/logout" },
  ];

  const handleClick = (path) => {
    history.push(path);
    closeMenu();
  };

  return (
    <IonContent className="ion-padding">
      {buttons.map((btn, idx) => (
        <IonButton
          key={idx}
          expand="block"
          fill="clear"
          className={`sidebar-btn ${location.pathname === btn.path ? "active" : ""}`}
          onClick={() => handleClick(btn.path)}
        >
          <IonIcon icon={btn.icon} slot="start" />
          {btn.name}
        </IonButton>
      ))}
    </IonContent>
  );
};

const MenuBar = () => {
  const menuRef = useRef(null);
  const [studentName, setStudentName] = useState("");
  const [classId, setClassId] = useState("");

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.close();
  };

  // 🔥 Fetch student info from localStorage
  useEffect(() => {
    const name = localStorage.getItem("studentName");
    const cls = localStorage.getItem("classId");
    if (name) setStudentName(name);
    if (cls) setClassId(cls);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <IonMenu ref={menuRef} contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>
              {studentName ? `${studentName} | Class: ${classId || "N/A"}` : "Menu"}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <Navigation closeMenu={closeMenu} />
      </IonMenu>

      {/* Main Content */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>
              {studentName ? `${studentName} | Class: ${classId || "N/A"}` : "Dashboard"}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Route exact path="/menubar" component={Home} />
          <Route path="/menubar/notes" component={Notes} />
          <Route path="/menubar/fees" component={Fees} />
          <Route path="/menubar/online-class" component={OnlineClass} />
          <Route path="/menubar/attendance" component={Attendance} />
          <Route path="/menubar/home-work" component={HomeWork} />
          <Route path="/menubar/exam-result" component={ExamResult} />
          <Route path="/menubar/exam-annual-schedule" component={ExamAnnualSchedule} />
          <Route path="/menubar/exam-hall-ticket" component={ExamHallTicket} />
          <Route path="/menubar/routine" component={Routine} />
          <Route path="/menubar/library" component={Library} />
          <Route path="/menubar/transport" component={Transport} />
          <Route path="/menubar/hostel" component={Hostel} />
          <Route path="/menubar/teachers" component={Teachers} />
          <Route path="/menubar/subjects" component={Subjects} />
          <Route path="/menubar/logout" component={Logout} />
        </IonContent>
      </IonPage>
    </>
  );
};

export default MenuBar;
