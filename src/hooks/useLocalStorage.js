import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
