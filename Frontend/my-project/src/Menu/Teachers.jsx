import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Teachers = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ye hai Teachers page ka code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Teachers Page 👩‍🏫👨‍🏫</h2>
        <p>Ye hai teachers page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Teachers;
