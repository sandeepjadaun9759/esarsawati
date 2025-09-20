import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const HomeWork = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Ye hai HomeWork page ka code</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the HomeWork Page 📚📝</h2>
        <p>Ye hai homework page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default HomeWork;
