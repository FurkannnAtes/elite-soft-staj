import ReduxCounterButtons from "../../components/ReduxCounterPage/ReduxCounterButtons";
import React from "react";
import { useSelector } from "react-redux";

const ReduxCounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      {count}
      <ReduxCounterButtons />
    </div>
  );
};

export default ReduxCounterPage;
