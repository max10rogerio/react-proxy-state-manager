import { createObservable, useObservable } from "../core";

const globalState = createObservable({ count: 0 });

export const ProxyWithMultipleComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>React Proxy State Manager</h1>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <DecrementButton />
        <CounterValue />
        <IncrementButton />
      </div>
    </div>
  );
};

const IncrementButton = () => {
  const counter = useObservable(globalState);

  return <button onClick={() => (counter.count += 1)}>+</button>;
};

const DecrementButton = () => {
  const counter = useObservable(globalState);

  return <button onClick={() => (counter.count -= 1)}>-</button>;
};

const CounterValue = () => {
  const counter = useObservable(globalState);

  return <span style={{ padding: "10px" }}>{counter.count}</span>;
};
