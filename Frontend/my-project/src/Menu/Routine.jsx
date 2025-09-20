import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Routine = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Ye hai Routine page ka code</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Routine Page 📅</h2>
        <p>Ye hai routine page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Routine;
