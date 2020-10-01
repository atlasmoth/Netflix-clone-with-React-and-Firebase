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
          <Browse.BrowseCard key={item.docId}>
            <h2>{item.description}</h2>
          </Browse.BrowseCard>
        ))}
      </Browse.BrowseList>

      <Browse.Title>Films</Browse.Title>
      <Browse.BrowseList>
        {films.films.map((item) => (
          <Browse.BrowseCard key={item.docId}>
            <h2>{item.description}</h2>
          </Browse.BrowseCard>
        ))}
      </Browse.BrowseList>

      <FooterContainer></FooterContainer>
    </Browse>
  );
}
