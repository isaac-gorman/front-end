import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import DummyData from "../../DummyData";
import SecondaryButton from "./SecondaryButton";

const PageContainer = styled.div`
  width: 100vw;
  height: 3523px;
  display: flex;
  flex-direction: column;
  background-color: pink;
`;

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f46060;
`;

const Header = styled.div`
  display: flex;
  width: 100%
  height: 140px;
  // justify-content: space-between;
    background-color: purple;
`;

const Logo = styled.h2`
  font-family: "airbnb_cereal_appbold";
  font-size: 18px;
  margin-top: 40px;
  text-align: left;
  // margin-left: 80px;
  color: black;
  flex-grow: 12;
  background-color: green;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  // width: 200px;
  background-color: green;
  flex-grow: 1;
`;

const ContentWrapper = styled.div`
  width: 100vw;
  height: 2900px;
  display: flex;
  background-color: #f46060;
  margin-top: 100px;
`;

const HigherOrderContent = styled.div`
  width: 50vw;
  height: 2900px;
  display: flex;
  background-color: #ffc702;
  margin-top: 100px;
`;
// RecipeFacts

const RecipeFacts = styled.div`
  width: 50vw;
  height: 2900px;
  display: flex;
  background-color: #4a87e8;
  margin-top: 100px;
`;

export default function RecipePageStyle() {
  // const [recipeData, setRecipeData] = useState(DummyData);

  return (
    <PageContainer>
      <HeroContainer>
        <Header>
          <Logo>Family Recipe App</Logo>
          <ButtonDiv>
            <SecondaryButton action="+Create Recipe" />
            <SecondaryButton action="Edit" />
          </ButtonDiv>
        </Header>
        {/* <RecipeImage />
        <RecipeTitle></RecipeTitle>
        <OriginatorIntro></OriginatorIntro> */}
      </HeroContainer>

      <ContentWrapper>
        <HigherOrderContent></HigherOrderContent>
        <RecipeFacts></RecipeFacts>
      </ContentWrapper>
    </PageContainer>
  );
}
