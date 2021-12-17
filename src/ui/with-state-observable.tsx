import { Counter } from "../components";
import { createObservable, useObservable } from "../core";

const state = createObservable({ count: 0 });

export const WithStateObservable = () => {
  const snapshot = useObservable(state);

  return (
    <Counter
      count={snapshot.count}
      onDecrement={() => (snapshot.count -= 1)}
      onIncrement={() => (snapshot.count += 1)}
      title="With State Observable"
    />
  );
};
