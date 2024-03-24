
export const setValueInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const removeValueFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const getValueFromLocalStorage = (key) => {
    return localStorage.getItem(key);
};
