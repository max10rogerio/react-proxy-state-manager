import { proxy, useSnapshot } from "valtio";
import { Counter } from "../components";

const state = proxy({ count: 0 });

export const WithValtio = () => {
  const snapshot = useSnapshot(state);

  return (
    <Counter
      count={snapshot.count}
      onDecrement={() => (state.count -= 1)}
      onIncrement={() => (state.count += 1)}
      title="With Valtio"
    />
  );
};
