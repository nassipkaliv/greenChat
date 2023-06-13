import React from "react";
import { Search, Content } from "./styles";

export default function SearchSection() {
  return (
    <React.Fragment>
      <Search placeholder="Search messages..." />
      <Content />
    </React.Fragment>
  );
}