import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// component we will be testing 
import About from '..';

// global function 'afterEach from jest; ensures no leftover memory data
afterEach(cleanup);

describe('About component', () => {
    // First test
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})

