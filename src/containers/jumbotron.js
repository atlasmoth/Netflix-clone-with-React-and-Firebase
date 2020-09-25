import React from "react";
import { Jumbotron } from "./../components";
import jumboData from "./../fixtures/jumbo.json";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((data) => (
        <Jumbotron key={data.id} direction={data.direction}>
          <Jumbotron.Panel>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Panel>
          <Jumbotron.Panel>
            <Jumbotron.Image alt={data.alt} src={data.image} />
          </Jumbotron.Panel>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
