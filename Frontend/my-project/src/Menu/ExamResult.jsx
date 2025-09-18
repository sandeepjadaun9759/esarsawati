import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const ExamResult = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ye hai Exam Result page ka code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Exam Result Page 📊</h2>
        <p>Ye hai exam result page ka code.</p>
      </IonContent>
    </IonPage>
  );
};

export default ExamResult;
