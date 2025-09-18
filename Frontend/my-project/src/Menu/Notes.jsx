import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Notes = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ye hai Notes page ka code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Notes Page 📝</h2>
        <p>Ye hai notes page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Notes;
