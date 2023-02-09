import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropDownMenu";

const TopbarContainer = styled.div`
  background-color: green;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 10px;
`;

function Topbar() {
  return (
    <TopbarContainer style={{ paddingRight: 10, paddingLeft: 9 }}>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i class="fa fa-phone" style={{ color: "white", margin: 5 }}></i>
        <i>(+216)775693214</i>
      </p>{" "}
      <p>
        Get 50% off on selected items | <i>Shop Now</i>
      </p>
      <DropdownMenu />
    </TopbarContainer>
  );
}

export default Topbar;
