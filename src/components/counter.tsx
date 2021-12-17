type CounterProps = {
  title: string;
  onIncrement: () => void;
  onDecrement: () => void;
  count: number;
};

export const Counter = (props: CounterProps) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <button onClick={props.onDecrement}>-</button>
        <span style={{ padding: "10px" }}>{props.count}</span>
        <button onClick={() => props.onIncrement()}>+</button>
      </div>
    </div>
  );
};
