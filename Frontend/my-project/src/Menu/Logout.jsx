import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";

const Logout = () => {
  const handleLogout = () => {
    // Yahan logout logic likho, jaise Firebase sign-out ya session clear karna
    console.log("User logged out");
  };

  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          <IonTitle>Ye hai Logout page ka code</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Welcome to the Logout Page 🚪</h2>
        <p>Ye hai logout page ka code.</p>
        <IonButton expand="block" onClick={handleLogout}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Logout;
