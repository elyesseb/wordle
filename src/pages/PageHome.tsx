import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import Wordle from "../components/Wordle";
import data from "../data/data";

const PageHome = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const el = data[0].words;
    const randomWords = el[Math.floor(Math.random() * el.length)];
    setSolution(randomWords.toLowerCase());
    console.log(randomWords.toLowerCase());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSolution]);

  console.log(data[0].words);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle class="ion-text-center">Wordle</IonTitle>
          <IonButton slot="end" onClick={() => window.location.reload()}>
            <i className="fa fa-refresh text-light" aria-hidden="true"></i>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>{solution && <Wordle solution={solution} />}</div>
      </IonContent>
    </IonPage>
  );
};

export default PageHome;
