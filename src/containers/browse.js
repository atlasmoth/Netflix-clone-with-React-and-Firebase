import React from "react";
import { Browse } from "./../components";
import { FooterContainer } from "./footer";
import { HeaderContainer } from "./Header";

export function BrowseContainer({ slides: { series, films } }) {
  return (
    <Browse>
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
          </Browse.BrowseCard>
        ))}
      </Browse.BrowseList>

      <FooterContainer></FooterContainer>
    </Browse>
  );
}
