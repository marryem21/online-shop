import React from "react";
import styled from "styled-components";
const HomeContainer = styled.section`
  background-image: url("images/bg.jpg");
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 650px;
  margin: 0;
`;
const H1 = styled.h1`
  color: #044c11;
  font-family: Roboto;
  font-size: 50px;
  text-align: start;
  margin-bottom: 0;
  position: relative;
  top: 20%;
  left: 60%;
  width: 35%;
`;
const H2 = styled.h2`
  color: #044c11;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  text-align: start;
  position: relative;
  top: 20%;
  left: 60%;
  width: 30%;
  margin-top: 2%;
`;
const Btn = styled.button`
  position: relative;
  top: 20%;
  left: 13%;
  margin-top: 2%;
  padding: 1%;
  background: #044c11;
  border: none;
  border-radius: 30px;
  color: #f2f2f2;
  font-size: 11px;
  font-weight: bold;
`;

const Home = () => {
  return (
    <HomeContainer>
      <H1>From the store to the palm of your hands</H1>
      <H2>
        We provide to you the most diverse shopping lists with the fastest
        delivery waiting times We provide to you the most diverse shopping
      </H2>
      <Btn>Learn more</Btn>
    </HomeContainer>
  );
};

export default Home;
