import React, { useMemo } from 'react';
// useToggle 切换

//

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

// 没有参数
function useToggle<T = boolean>(): [boolean, Actions<T>];

// 有一个参数
function useToggle<T>(defaultValue: T): [T, Actions<T>];

// 有两个参数
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<D, R>(defaultvalue = false as D, reverseValue?: R) {
  const [state, setState] = React.useState<D | R>(defaultvalue);

  const actions = useMemo(() => {
    const reverseValueOrigin = reverseValue ? reverseValue : !defaultvalue;

    const setLeft = () => setState(defaultvalue);
    const setRight = () => setState(reverseValueOrigin);
    const set = (value: D | R) => setState(value);
    const toggle = () =>
      setState((prev: D | R) => (prev === defaultvalue ? reverseValueOrigin : defaultvalue));

    return { setLeft, setRight, set, toggle };
  }, []);
}

export default useToggle;