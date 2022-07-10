import { Link } from "react-router-dom";
import "./style.css";

const fakeData = {
  _id: "52944",
  name: "Escovitch Fish",
  categoryId: "1",
  categoryName: "Fish",
  duration: 11,
  complexity: "Hard",
  people: 3,
  recommended: 1,
  ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
  description:
    "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
  photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
};

export default function Detail() {
  let imageUrl = "http://via.placeholder.com/640x360";
  if (fakeData && fakeData.photo) {
    imageUrl = fakeData.photo;
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <div className="top">
          <img src={imageUrl} />
          <div className="top-information">
            <p className="recipe-detail-category">{fakeData.categoryName}</p>
            <h1 className="recipe-detail-name">{fakeData.name}</h1>
            <div className="recipe-detail-stuff">
              <p className="recipe-detail-time">{fakeData.duration} minutes</p>
              <p className="recipe-detail-complexity">{fakeData.complexity}</p>
              <p className="recipe-detail-people">{fakeData.people} people</p>
            </div>
            <div className="ingredients">
              <h4>Ingredients</h4>
              {fakeData.ingredients.split("\r\n").map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom">
          <h4 className="description">Info</h4>
          <p className="description-text">{fakeData.description}</p>
        </div>´`´`
      </div>
    </div>
  );
}
