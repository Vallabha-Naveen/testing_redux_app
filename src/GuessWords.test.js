import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessWords from './GuessWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 1 }]
};

const setup = (props) => {
    const setupProps = { ...defaultPros, ...props };
    return shallow(<GuessWords {...setupProps}></GuessWords>)
}


test('does not throw warning with expected props', () => {
    checkProps(GuessWords, defaultProps);
})

test('should render', () => { })