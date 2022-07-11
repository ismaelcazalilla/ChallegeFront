import RecipeList from "../../recipe/components/list/RecipeList";
import RecommendedList from "../../recommended/components/list/RecommendedList";
import Header from "../shared/header/Header";

import "./style.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="page">
        <RecommendedList />
        <RecipeList />
      </div>
    </div>
  );
}
