"use client";
import React, { useContext } from "react";
import { MealContext } from "./MealsProvider";

const MealsList = () => {
  const [meals, toggleMeal] = useContext(MealContext);
  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <input
              type="checkbox"
              onChange={() => toggleMeal(meal.id)}
              checked={!!meal.ticked}
            />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
