import React from "react";
import styled from "styled-components";
const Dropdown = styled.div`
  margin: 16;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function DropdownMenu() {
  return (
    <div
      style={{
        dislay: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Dropdown>
        <p style={{ marginRight: 5 }}>En</p>
        <i class="fa-solid fa-chevron-down"></i>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;
