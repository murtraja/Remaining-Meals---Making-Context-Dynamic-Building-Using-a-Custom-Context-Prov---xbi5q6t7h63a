"use client";
import React, { useContext } from "react";
import { MealContext } from "./MealsProvider";

const Counter = () => {
  const [meals, toggleMeal] = useContext(MealContext);
  const availableMeals = meals.reduce((prev, cur) => {
    cur.ticked ??= 0;
    return prev + cur.ticked;
  }, 0);

  /*
  scenario, first is ticked, second is not, third is ticked
  step1:
  prev: 0 (from 2nd argument to reduce)
  cur: {id:1, name:baked beans, ticked:true}
  return 0 + true = 0 + 1 = 1

  step2:
  prev: 1 (from return statement of previous iteration)
  cur: {id:2, name:baked sweet potatoes}
  return 1 + 0 = 1

  step3:
  prev: 1 (from return statement of previous iteration)
  cur: {id:3, name:baked potatoes}
  return 1 + true = 1 + 1 = 2

  final value is 2
  */

  // Easy way
  //   let availableMeals = 0;
  //   meals.forEach((meal) => {
  //     if (meal.ticked) {
  //       availableMeals += 1;
  //     }
  //   });
  const remainingMeals = meals.length - availableMeals;
  return (
    <div>
      <h3>Meals Remaining: {remainingMeals}</h3>
    </div>
  );
};

export default Counter;
