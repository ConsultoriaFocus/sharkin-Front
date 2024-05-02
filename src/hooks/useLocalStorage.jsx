export const UseLocalStorage = (key, defaultValue) => {
    const getItem = () => {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    };
  
    const setItem = (value) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    };
  
    return { getItem, setItem };
  };
  