import React from "react";
import { BrowseContainer } from "../containers/browse";
import useContent from "./../hooks/useContent";

export default function Browse({ children }) {
  const series = useContent("series");
  const films = useContent("films");

  return <BrowseContainer slides={{ series, films }} />;
}
