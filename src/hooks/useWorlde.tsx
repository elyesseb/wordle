import { useState } from "react";

const useWorlde = (solution: any) => {
  const [turn, setTurn] = useState<any>(0);
  const [currentWord, setCurrentWord] = useState<any>("");
  const [tries, setTries] = useState<any>([...Array(6)]);
  const [history, setHistory] = useState<any>([]);
  const [isCorrect, setIsCorrect] = useState<any>(false);
  const [usedKeys, setUsedKeys] = useState<any>({});

  const formatWord = () => {
    let solutionArray = [...solution];
    let formattedWord = [...currentWord.toLowerCase()].map((el) => {
      return { key: el, color: "grey" };
    });

    // find green letters
    formattedWord.forEach((el, i) => {
      if (solutionArray[i] === el.key) {
        formattedWord[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find yellow letters
    formattedWord.forEach((el, i) => {
      if (solutionArray.includes(el.key) && el.color !== "green") {
        formattedWord[i].color = "yellow";
        solutionArray[solutionArray.indexOf(el.key)] = null;
      }
    });

    return formattedWord;
  };

  const addNewWord = (formattedWord: any) => {
    if (currentWord === solution) {
      setIsCorrect(true);
    }

    setTries((prevTries) => {
      let newTries = [...prevTries];
      newTries[turn] = formattedWord;
      return newTries;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentWord];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      formattedWord.forEach((l) => {
        const currentColor = prevUsedKeys[l.key];

        if (l.color === "green") {
          prevUsedKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== "green") {
          prevUsedKeys[l.key] = "yellow";
          return;
        }
        if (l.color === "grey" && currentColor !== ("green" || "yellow")) {
          prevUsedKeys[l.key] = "grey";
          return;
        }
      });

      return prevUsedKeys;
    });
    setCurrentWord("");
  };

  const handleKeyUp = (props: { key: any }) => {
    const { key } = props;
    // add word only less than 5
    if (key === "Enter") {
      if (turn > 5) {
        console.log("Vous avez utilisé toutes vos chances");
      }
      if (currentWord.length !== 5) {
        console.log("Les mots doivent avoir 5 caractères");
        return;
      }
      const formatted = formatWord();
      addNewWord(formatted);
    }

    if (key === "Backspace") {
      setCurrentWord((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentWord.length < 5) {
        setCurrentWord((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentWord, tries, isCorrect, usedKeys, handleKeyUp };
};

export default useWorlde;
