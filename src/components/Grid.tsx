import Row from "./Row";

export default function Grid(props: {
  currentWord: any;
  tries: any;
  turn: any;
  keyBtn:any;
}) {
  const { currentWord, tries, turn, keyBtn } = props;

  return (
    <div className="grid">
      {tries.map((el, i) => {
        if (turn === i) {
          return <Row key={i} currentWord={currentWord} keyBtn={keyBtn} trie={undefined} />;
        } else {
          return <Row key={i} trie={el} currentWord={undefined} keyBtn={undefined} />;
        }
      })}
    </div>
  );
}
