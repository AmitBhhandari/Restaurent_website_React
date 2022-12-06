import MealItem from "./MealItem/MeaIItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Gajer ka Halwa",
    description: "Sweetest Dish",
    price: 150,
  },
  {
    id: "m2",
    name: "Rajma Chawal",
    description: "A Indian specialty!",
    price: 100,
  },
  {
    id: "m3",
    name: "Chole Bhature",
    description: "Delhi Famous",
    price:80,
  },
  {
    id: "m4",
    name: "Kadai Paneer",
    description: "Protein",
    price: 350,
  },
];

const AvailableMMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMMeals;
