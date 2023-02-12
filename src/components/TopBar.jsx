import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropDownMenu";

const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  height: 35px;
  width: 100%;
  background-color: #f7f7f7;
  color: black;
  font-size: 10px;
  font-weight: bold;
`;
const InnerContainer = styled.div`
  margin: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  padding: 0.5%;
`;
function Topbar() {
  return (
    <TopbarContainer>
      <InnerContainer>
        <p
          style={{
            display: "flex",
            alignItems: "space-between",
            justifyContent: "space-between",
          }}
        >
          <i
            class="fa fa-phone"
            style={{ color: "black", marginRight: "5px" }}
          ></i>
          <i>(+216) 775693214</i>
        </p>{" "}
        <p>
          Get 50% off on selected items | <i> Shop Now</i>
        </p>
        <DropdownMenu />
      </InnerContainer>
    </TopbarContainer>
  );
}

export default Topbar;
