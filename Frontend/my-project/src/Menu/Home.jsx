import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> ye hai home page ka code </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Home Page 🚀</h2>
        <p>ye hai home page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
