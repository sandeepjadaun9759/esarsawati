import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Subjects = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Ye hai Subjects page ka code</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Subjects Page 📖</h2>
        <p>Ye hai subjects page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Subjects;
