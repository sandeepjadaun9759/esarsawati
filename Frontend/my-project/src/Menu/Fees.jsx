import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Fees = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Fees Page 💰</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Fees Page</h2>
        <p>Yahan par student fees details ya payment options dikhaye ja sakte hain.</p>
      </IonContent>
    </IonPage>
  );
};

export default Fees;
