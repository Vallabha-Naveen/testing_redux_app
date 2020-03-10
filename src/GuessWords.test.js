import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessWords from './GuessWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 1 }]
};

const setup = (props) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessWords {...setupProps}></GuessWords>)
}


test('does not throw warning with expected props', () => {
    checkProps(GuessWords, defaultProps);
})

describe('if there are no words guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test('renders without err', () => {
        const component = findByTestAttr(wrapper, 'comp-gussed-words');
        expect(component.length).toBe(1)
    })

    test('renders instructions to guess word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {
    let guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ];

    let wrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })

    test('renders without erros', () => {
        const component = findByTestAttr(wrapper, 'comp-gussed-words');
        expect(component.length).toBe(1)
    })

    test('renders gussed words section', () => {
        const guessWrodsNode = findByTestAttr(wrapper, 'gussed-words');
        expect(guessWrodsNode.length).toBe(1)
    })

    test('correct number of guessed words', () => {
        const guessWrodsNode = findByTestAttr(wrapper, 'gussed-word');
        expect(guessWrodsNode.length).toBe(guessedWords.length);
    })
})