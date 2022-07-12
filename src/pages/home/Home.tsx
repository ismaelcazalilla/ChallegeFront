import RecipeList from "../../recipe/components/list/RecipeList";
import RecommendedList from "../../recommended/components/list/RecommendedList";
import Header from "../shared/header/Header";
import styled from 'styled-components';

import "./style.css";

const Main = styled.main`
  background-color: #fafafa;
  padding-top: 50px;
`;

export default function Home() {
  return (
    <div>
      <Header />
      <Main>
        <RecommendedList />
        <RecipeList />
      </Main>
    </div>
  );
}
