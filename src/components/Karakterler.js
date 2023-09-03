import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Accordion } from "reactstrap";
import Karakter from "./Karakter";

export default function Karakterler(props) {
  const { characters } = props;
  const [open, setOpen] = useState(0);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        {characters.map((item, index) => {
          return <Karakter key={index} id={index} character={item} />;
        })}
      </Accordion>
    </div>
  );
}
