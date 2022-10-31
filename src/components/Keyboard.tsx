import { useEffect, useState } from "react";
import Wordle from "./Wordle";
import data from "../data/data";

export default function Keyboard(props: { usedKeys: any; handleClick:any }) {
  const { usedKeys, handleClick } = props;
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(data[0].letters);
  }, []);

  return (
    <div className="keyboard">
      {letters &&
        letters.map((el) => {
          const color = usedKeys[el.key];

          if (el.key === "Enter") {
            return (
              <button key={el.key} className={color}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.78"
                  height="12.7"
                  viewBox="0 0 17.78 12.7"
                >
                  <path
                    id="enter_1_"
                    data-name="enter (1)"
                    d="M15.24,53.529H10.16v2.54h5.08v3.81H5.08l1.9-1.9-1.9-1.9L0,61.149l5.08,5.08,1.9-1.9L5.08,62.419H15.24a2.542,2.542,0,0,0,2.54-2.54V56.069A2.543,2.543,0,0,0,15.24,53.529Z"
                    transform="translate(0 -53.529)"
                    fill="#fff"
                  />
                </svg>
              </button>
            );
          }
          if (el.key === "Backspace") {
            return (
              <button key={el.key} className={color}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="delete_backspace"
                  width="18.15"
                  height="12.7"
                  viewBox="0 0 18.15 12.7"
                >
                  <g id="Group_44" data-name="Group 44">
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M18.331,5H8.353a3.212,3.212,0,0,0-2.188.974L2.48,10.069a1.936,1.936,0,0,0,0,2.562l3.685,4.095a3.212,3.212,0,0,0,2.188.974h9.978a1.816,1.816,0,0,0,1.814-1.814V6.814A1.817,1.817,0,0,0,18.331,5Zm0,10.885H8.353a1.482,1.482,0,0,1-.84-.374L3.828,11.417a.136.136,0,0,1,0-.134L7.514,7.188a1.48,1.48,0,0,1,.839-.374h9.978Z"
                      transform="translate(-1.996 -5)"
                      fill="#fff"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M11.293,14.624a.985.985,0,0,0,1.393,0l1.273-1.274,1.274,1.274a.986.986,0,1,0,1.394-1.393l-1.274-1.274,1.274-1.274a.985.985,0,1,0-1.393-1.393L13.96,10.563,12.687,9.289a.985.985,0,1,0-1.393,1.393l1.273,1.274-1.274,1.274A.986.986,0,0,0,11.293,14.624Z"
                      transform="translate(-3.135 -5.607)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>
            );
          }

          return (
            <>
              <button
                key={el.key}
                className={color}
                // onClick={handleClick () => {
                //   setKeyBtn(el.key);
                // }}
                onClick={event => handleClick(event, el.key)}
              >
                {el.key}
              </button>
            </>
          );
        })}
    </div>
  );
}
