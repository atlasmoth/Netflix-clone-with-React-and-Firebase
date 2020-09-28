import React from "react";
import { JumbotronContainer } from "./../containers/jumbotron";
import { FooterContainer } from "./../containers/footer";
import { AccordionContainer } from "./../containers/accordion";
import { HeaderContainer } from "./../containers/Header";
import { OptForm } from "./../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Try it Now</OptForm.Button>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
