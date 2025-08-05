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
function useToggle(): [boolean, Actions<boolean>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<T = boolean, U = boolean>(
  defaultValue?: T,
  reverseValue?: U,
): [T | U, Actions<T | U>] {
  const _defaultValue = (defaultValue === undefined ? false : defaultValue) as T;
  const _reverseValue =
    reverseValue === undefined ? (!_defaultValue as unknown as U) : reverseValue;

  const [state, setState] = React.useState<T | U>(_defaultValue);

  const actions = useMemo(() => {
    const setLeft = () => setState(_defaultValue);
    const setRight = () => setState(_reverseValue);
    const set = (value: T | U) => setState(value);
    const toggle = () =>
      setState((prev: T | U) => (prev === _defaultValue ? _reverseValue : _defaultValue));

    return { setLeft, setRight, set, toggle };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_defaultValue, _reverseValue]);

  return [state, actions];
}

export default useToggle;
