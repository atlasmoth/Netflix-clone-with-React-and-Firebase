import React, { useReducer } from "react";
import { Browse, Popup } from "./../components";
import { FooterContainer } from "./footer";
import { HeaderContainer } from "./Header";

function reducer(state, action) {
  switch (action.type) {
    case "play": {
      return { ...state, bool: true, info: action.info };
    }
    case "stop": {
      return { ...state, bool: false, info: null };
    }
    default: {
      return { ...state };
    }
  }
}

export function BrowseContainer({ slides: { series, films } }) {
  const [state, dispatch] = useReducer(reducer, { bool: false, info: null });
  return (
    <Browse>
      {state.bool && (
        <Popup>
          <h1>{state.info}</h1>
          <video controls autoPlay>
            <source src="/videos/bunny.mp4" type="video/mp4"></source>
          </video>
          <button onClick={() => dispatch({ type: "stop" })}>Close</button>
        </Popup>
      )}
      <HeaderContainer></HeaderContainer>

      <Browse.Title>Series</Browse.Title>
      <Browse.BrowseList>
        {series.series.map((item) => (
          <Browse.BrowseCard
            key={item.docId}
            src={`/images/series/${item.genre}/${item.slug}/large.jpg`}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button
              onClick={() => dispatch({ type: "play", info: item.title })}
            >
              Watch
            </button>
          </Browse.BrowseCard>
        ))}
      </Browse.BrowseList>

      <Browse.Title>Films</Browse.Title>
      <Browse.BrowseList>
        {films.films.map((item) => (
          <Browse.BrowseCard
            key={item.docId}
            src={`/images/films/${item.genre}/${item.slug}/large.jpg`}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button
              onClick={() => dispatch({ type: "play", info: item.title })}
            >
              Watch
            </button>
          </Browse.BrowseCard>
        ))}
      </Browse.BrowseList>

      <FooterContainer></FooterContainer>
    </Browse>
  );
}
