import { IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import useWorlde from "../hooks/useWorlde";
import Grid from "./Grid";
import Keyboard from "./Keyboard";

const Wordle = (props: { solution: any }) => {
  const { solution } = props;
  const { currentWord, handleKeyUp, tries, isCorrect, turn, usedKeys } =
    useWorlde(solution);

  const [showToastWin, setShowToastWin] = useState(false);
  const [showToastLoose, setShowToastLoose] = useState(false);
  const [keyBtn, setKeyBtn] = useState([]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      console.log("You win !");
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      console.log("You loose !");
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, isCorrect, turn]);

  const handleClick = (event) => {
    let array = [];
    for (let i = 0; i < event.length; i++) {
      const element = event[i];
      array.push(element.target.innerHTML);
    }
    setKeyBtn(array);
  };

  console.log(keyBtn);

  return (
    <div>
      <Grid
        currentWord={currentWord}
        tries={tries}
        turn={turn}
        key={usedKeys}
        keyBtn={keyBtn}
      />
      <Keyboard usedKeys={usedKeys} handleClick={handleClick} />
      <IonToast
        isOpen={isCorrect}
        onDidDismiss={() => setShowToastWin(false)}
        message="Bravo, vous avez trouvez le mot."
        duration={200}
      />
    </div>
  );
};

export default Wordle;
