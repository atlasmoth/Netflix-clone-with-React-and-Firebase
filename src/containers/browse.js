import React from "react";
import { Browse } from "./../components";
import { FooterContainer } from "./footer";
import { HeaderContainer } from "./Header";

export function BrowseContainer({ slides: { series, films } }) {
  return (
    <Browse>
      <HeaderContainer>
        <h1>Series</h1>
        <Browse.BrowseList>
          {series.series.map((item) => (
            <Browse.BrowseCard key={item.docId}>
              <h2>{item.description}</h2>
            </Browse.BrowseCard>
          ))}
        </Browse.BrowseList>

        <h1>Films</h1>
        <Browse.BrowseList>
          {films.films.map((item) => (
            <Browse.BrowseCard key={item.docId}>
              <h2>{item.description}</h2>
            </Browse.BrowseCard>
          ))}
        </Browse.BrowseList>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </Browse>
  );
}
