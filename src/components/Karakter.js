import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import styled from "styled-components";
import Filmler from "./Filmler";

export default function Karakter(props) {
  const { id, character } = props;

  const StyDiv = styled.div`
    font-size: 2rem;
  `;
  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId={id}>{character.name}</AccordionHeader>
        <AccordionBody accordionId={id}>
          <StyDiv>Gender:{character.gender}</StyDiv>
          <StyDiv>Height:{character.height}</StyDiv>
          <StyDiv>Mass:{character.mass}</StyDiv>
          {character.films.map((item) => {
            return <Filmler name={item} />;
          })}
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}
// Karakter bileşeniniz buraya gelecek
