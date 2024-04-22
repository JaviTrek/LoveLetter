// MyProvider.jsx
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [value, setValue] = useState('Initial State');

    const updateValue = (newValue) => {
        setValue(newValue);
    };

    return (
        <MyContext.Provider value={{ value, updateValue }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
