import { Link } from "react-router-dom";
import RecipeList from "../../recipe/components/list/RecipeList";
import RecommendedList from "../../recommended/components/list/RecommendedList";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <RecommendedList />
        <RecipeList />
      </div>
    </div>
  );
}
