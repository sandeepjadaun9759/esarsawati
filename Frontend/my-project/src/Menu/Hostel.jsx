import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Hostel = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Ye hai Hostel page ka code</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Hostel Page 🏨</h2>
        <p>Ye hai hostel page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Hostel;
