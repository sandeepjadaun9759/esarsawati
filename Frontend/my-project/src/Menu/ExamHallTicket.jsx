import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const ExamHallTicket = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Ye hai Exam Hall Ticket page ka code</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Exam Hall Ticket Page 🎫</h2>
        <p>Ye hai exam hall ticket page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default ExamHallTicket;
