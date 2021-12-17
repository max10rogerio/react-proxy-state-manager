import {
  ProxyWithMultipleComponents,
  WithStateObservable,
  WithValtio,
} from "./ui";

import "./App.css";

export const App = () => {
  return (
    <div className="container">
      <WithValtio />
      <hr className="divider" />
      <ProxyWithMultipleComponents />
      <hr className="divider" />
      <WithStateObservable />
    </div>
  );
};
