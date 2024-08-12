import { useCallback } from "react";

export const syncCode = () => {
  let pizza;
  const orderPizza = () => {
    console.log("Order the pizza");
    pizza = "pizza";
    console.log("Pizza is ready");
  };

  orderPizza();
  console.log(`Eat the ${pizza}`);
};

const AsynWithSetTime = () => {
  let pizza;
  const orderPizza = () => {
    console.log("Order the pizza");
    //set Time
    setTimeout(() => (pizza = "pizza"), 2000);
    console.log("Pizza is ready");
  };

  orderPizza();
  console.log("Call Amalia");
  console.log(`Eat the ${pizza}`);
};

export default AsynWithSetTime;

export const FixWithCallBackFunction = () => {
  let pizza;

  const orderPizza = (callBackFunc) => {
    console.log("Order my pizza");

    setTimeout(() => {
      pizza = "my pizza";
      console.log("pizza is ready");
      callBackFunc();
      // LOGIC : When this is ready, I call the function that has the value of pizza. Otherwise  Undifined.
    }, 2000);
  };

  const EatPizza = () => console.log(`Eat my ${pizza}`);

  orderPizza(EatPizza);

  console.log("Call Amalia");
};
