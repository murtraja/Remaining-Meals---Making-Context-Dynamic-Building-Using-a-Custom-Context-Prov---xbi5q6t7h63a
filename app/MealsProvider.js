"use client";
import React, { useState, createContext } from "react";

export const MealContext = createContext();

const todaysMeals = [
  { id: 1, name: "Baked Beans" },
  { id: 2, name: "Baked Sweet Potatoes" },
  { id: 3, name: "Baked Potatoes" },
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const toggleMeal = (id) => {
    const newMeals = [...meals];
    newMeals[id - 1].ticked = !newMeals[id - 1].ticked;
    setMeals(newMeals);
  };

  return (
    <MealContext.Provider value={[meals, toggleMeal]}>
      {children}
    </MealContext.Provider>
  );
};

export default MealsProvider;
