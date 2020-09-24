import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";

function App() {
  console.log(jumboData);
  return (
    <Jumbotron.Container>
      {jumboData.map((data) => (
        <Jumbotron key={data.id} direction={data.direction}>
          <p>{data.title}</p>
          <p>{data.subTitle}</p>
          <p>{data.image}</p>
          <p>{data.alt}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
