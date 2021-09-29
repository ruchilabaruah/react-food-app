import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://react-starter-4e160-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        );
        if (!response.ok) {
          throw new Error(response.error);
        }
        const meals = await response.json();
        let loadedMeals = [];
        for (let i in meals) {
          const meal = {
            ...meals[i],
            key: i,
          };
          loadedMeals = [...loadedMeals, meal];
        }
        console.log(loadedMeals);
        setAvailableMeals(loadedMeals);
      } catch (error) {
        console.log("Something went wrong! ", error);
      }
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return <p>Loading meals</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {availableMeals.map((meal) => {
            return <MealItem key={meal.id} meal={meal}></MealItem>;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
