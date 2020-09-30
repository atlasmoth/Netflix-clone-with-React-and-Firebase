import React from "react";
import useContent from "./../hooks/useContent";

export default function Browse({ children }) {
  const series = useContent("series");
  const films = useContent("films");

  console.log(series);
  console.log(films);
  return <>{children}</>;
}
