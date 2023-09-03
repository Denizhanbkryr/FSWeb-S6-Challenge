import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const StyHeader = styled.header`
    display: flex;
    justify-content: space-between;
  `;
  const { changeHandler, search } = props;
  return (
    <div>
      <StyHeader>
        <h1>Star Wars</h1>
        <input
          autoFocus
          type="text"
          placeholder="Search"
          value={search}
          onChange={changeHandler}
          name="Search"
        />
      </StyHeader>
    </div>
  );
}
