import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
 
const Attendance = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ye hai Attendance page ka code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Attendance Page 📋✅</h2>
        <p>Ye hai attendance page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Attendance;
