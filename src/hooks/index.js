import {useState, useReducer} from 'react';
import {produce} from 'immer';

export const useInput = initialValue => {
    const [value, onChange] = useState(initialValue);

    return {
        value,
        onChange(e) {
            onChange(e.target.value);
        },
    };
};

export const useImmer = (producer, initialValue) =>
    useReducer((state, action) => produce(state, draft => producer(draft, action)), initialValue);
