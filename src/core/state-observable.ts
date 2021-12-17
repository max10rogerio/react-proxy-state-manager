import { useState, useEffect } from "react";

type CallbackSubscriber<T = any> = (msg: T) => void;
type VoidFunction = () => void;

export function createSubscribable<MessageType>() {
  const subscribers: Set<CallbackSubscriber<MessageType>> = new Set();

  return {
    subscribe(cb: CallbackSubscriber<MessageType>): VoidFunction {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },

    publish(msg: MessageType): void {
      subscribers.forEach((cb) => cb(msg));
    },
  };
}

type ObservableMessage<T> = {
  target: T;
  prop: string;
};

type Observable<T> = T & {
  subscribe: (callback: (data: ObservableMessage<T>) => void) => VoidFunction;
};

export function createObservable<DataType>(
  data: DataType
): Observable<DataType> {
  const subscribers = createSubscribable<ObservableMessage<DataType>>();

  return new Proxy(
    {
      ...data,
      subscribe: subscribers.subscribe,
    },
    {
      set: function (target: any, prop: string, value: any) {
        target[prop] = value;

        subscribers.publish({
          target,
          prop,
        } as unknown as ObservableMessage<DataType>);
        return true;
      },
    }
  ) as Observable<DataType>;
}

export function useObservable<DataType>(
  observable: Observable<DataType>
): DataType {
  const [, setVersion] = useState(0);

  useEffect(
    () =>
      observable.subscribe((args) => {
        console.log(args);
        setVersion((v) => v + 1);
      }),
    [observable]
  );

  return observable as DataType;
}
