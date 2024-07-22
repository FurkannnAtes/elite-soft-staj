import { Button } from "antd";
import React from "react";

const CounterButtons = ({ count, setCount }) => {
  const handleDescCount = () => {
    setCount(count - 1);
  };

  const handleIncCount = () => {
    setCount(count + 1);
  };
  const handleIncCountByAmount = (amount) => {
    setCount(count + amount);
  };
  return (
    <div>
      <Button onClick={handleDescCount} type="primary">
        Azalt
      </Button>
      <Button onClick={handleIncCount} type="primary">
        Arttir
      </Button>
      <Button onClick={() => handleIncCountByAmount(5)} type="primary">
        Arttir (5)
      </Button>
    </div>
  );
};

export default CounterButtons;
