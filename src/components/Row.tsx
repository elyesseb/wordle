import { IonCol, IonGrid, IonRow } from "@ionic/react";

const getStyle = () => {
  return {
    container: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      color: "#fff",
    } as any,
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      border: "3px solid #2f2f2f",
      boxSizing: "border-box",
      borderRadius: "6px",
      margin: "4px",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "28px",
      fontFamily: "outfit",
    } as any,
  };
};

export default function Row(props: {
  trie: any;
  currentWord: any;
  keyBtn: any;
}) {
  const { trie, currentWord, keyBtn } = props;
  const style = getStyle();

  if (keyBtn) {
    console.log(keyBtn);
  }

  if (trie) {
    return (
      <IonGrid style={style.container}>
        {trie.map((el, i) => (
          <IonRow key={i}>
            <IonCol style={style.item} class={el.color}>
              {el.key}
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
  }

  if (currentWord || keyBtn) {
    let letters = currentWord.split("");

    return (
      <IonGrid style={style.container}>
        {letters.map((el, i) => (
          <IonRow key={i}>
            <IonCol style={style.item} class={el.color} className="filled">
              {el}
            </IonCol>
          </IonRow>
        ))}
        {[...Array(5 - letters.length)].map((el, i) => (
          <IonRow key={i}>
            <IonCol style={style.item}></IonCol>
          </IonRow>
        ))}
      </IonGrid>
    );
  }

  return (
    <IonGrid style={style.container}>
      <IonRow>
        <IonCol style={style.item}></IonCol>
        <IonCol style={style.item}></IonCol>
        <IonCol style={style.item}></IonCol>
        <IonCol style={style.item}></IonCol>
        <IonCol style={style.item}></IonCol>
      </IonRow>
    </IonGrid>
  );
}
