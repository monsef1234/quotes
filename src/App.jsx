import React, { useState } from "react";

const quotes = [
  {
    quote:
      "Ambition often puts men upon doing the meanest offices; so climbing is performed in the same posture with creeping.",
    vote: 0,
  },
  {
    quote:
      "The only place you will be accepted is the place you make for yourself",
    vote: 0,
  },
  {
    quote:
      "The only reason I made a commercial for American Express was to pay for my American Express bill.",
    vote: 0,
  },
  {
    quote:
      "A nation is a society united by delusions about its ancestry and by common hatred of its neighbors.",
    vote: 0,
  },
  {
    quote:
      "For most men life is a search for the proper manila envelope in which to get themselves filed.",
    vote: 0,
  },
  { quote: "Love is the reason for it all.", vote: 0 },
  {
    quote:
      "There are some men who lift the age they inhabit, till all men walk on higher ground in that lifetime.",
    vote: 0,
  },
];
const App = () => {
  const [arr, setArr] = useState(quotes);
  const [start, setStart] = useState(false);
  const [isRandomed, setIsRandomed] = useState(false);
  const [quote, setQuote] = useState(0);
  const [biggerVote, setBiggerVote] = useState([]);
  const startHandler = () => {
    setStart(true);
  };
  const randomHandler = () => {
    let random = Math.trunc(Math.random() * quotes.length);
    if (quote === random) {
      random = Math.trunc(Math.random() * quotes.length);
      setQuote(random);
    }
    setQuote(random);
  };
  const voteHandler = () => {
    let quotesArr = [...arr];
    quotesArr[quote].vote = quotesArr[quote].vote + 1;
    setArr(quotesArr);
    let maxVote = Math.max(
      ...arr.map((item) => {
        return item.vote;
      })
    );
    let filterMax = arr.filter((item) => {
      return item.vote >= maxVote;
    });
    setIsRandomed(true);
    setBiggerVote([...filterMax]);
  };
  return (
    <>
      <div className="quotes__container">
        <div
          className="quote"
          style={{ border: start ? "2px solid black" : null }}
        >
          {!start && (
            <button onClick={startHandler}>Start Generating Quotes</button>
          )}
          {start && (
            <>
              <p>{arr[quote].quote}</p>
              <div className="btns">
                <button onClick={voteHandler}>Vote {arr[quote].vote}</button>
                <button onClick={randomHandler}>Another Quote</button>
              </div>
            </>
          )}
        </div>
        <div className="most_quote">
          {!isRandomed ? (
            "No Biggest Voted Quotes Yet"
          ) : (
            <div>
              <span>
                {biggerVote.length > 1
                  ? "The biggest Votee Go to these Quotes"
                  : "The biggest Vote Goes to this Quote"}
                :
              </span>
              {biggerVote.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.quote}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
