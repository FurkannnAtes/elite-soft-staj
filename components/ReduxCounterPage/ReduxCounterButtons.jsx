import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/features/counter";
import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const ReduxCounterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="primary" onClick={() => dispatch(decrement())}>
        Azalt
      </Button>
      <Button type="primary" onClick={() => dispatch(increment())}>
        Arttir
      </Button>
      <Button type="primary" onClick={() => dispatch(incrementByAmount(10))}>
        Arttir (5)
      </Button>
    </div>
  );
};

export default ReduxCounterButtons;
