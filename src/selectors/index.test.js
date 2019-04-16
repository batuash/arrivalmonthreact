import React from 'react';
import { getCurrentUser } from '../selectors';
import { initialState, defaultUser } from '../reducers/app';
import type { State, Usr } from '../reducers/app';

describe('Selectors', () => {
    it('getCurrentUser', () => {
        const currentUser: User = getCurrentUser(initialState);
        expect(currentUser).toEqual(defaultUser);
    });
});
