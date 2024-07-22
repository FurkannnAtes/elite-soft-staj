import CounterButtons from "../../components/CounterPage/CounterButtons";
import { Button } from "antd";
import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <CounterButtons count={count} setCount={setCount} />
    </div>
  );
};

export default CounterPage;
