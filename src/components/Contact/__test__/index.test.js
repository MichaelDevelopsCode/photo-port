import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(
            <Contact />
        );
    });

    it('Matches snapshot DOM node structure', () => {
        const { asFragment } = render( <Contact /> );

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Correct text', () => {
    it('matches text', () => {
        const { getByTestId } = render( <Contact /> );

        expect(getByTestId('head')).toHaveTextContent('Contact me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
});