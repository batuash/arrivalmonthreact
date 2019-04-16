import React from 'react';
import { addTimeStamp, ADD_TIMESTAMP } from '../actions';

describe('Actions', () => {
    it('addTimeStamp', () => {
        const action = addTimeStamp(1);
        expect(action.type).toBe(ADD_TIMESTAMP);
        expect(action.timeStamp).toBe(1);
    });
});
