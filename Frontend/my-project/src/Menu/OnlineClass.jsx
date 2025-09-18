import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const OnlineClass = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ye hai Online Class page ka code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Online Class Page 💻📚</h2>
        <p>Ye hai online class page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default OnlineClass;
