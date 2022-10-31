import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Wordle from "../components/Wordle";

const PageHome = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/data`)
      .then((res) => res.json())
      .then((data) => {
        const randomWords = data[Math.floor(Math.random() * data.length)];
        setSolution(randomWords.toLowerCase());
        console.log(randomWords.toLowerCase());
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSolution]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle class="ion-text-center">Wordle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>{solution && <Wordle solution={solution}/>}</div>
      </IonContent>
    </IonPage>
  );
};

export default PageHome;
