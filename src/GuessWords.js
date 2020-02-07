import React from 'react';
import PropTypes from 'prop-types';


const GuessWords = props => {
    let content;
    if (props.gussedWords.length === 0) {
        content = <span data-test="guess-instructions">
            Try to guess something
        </span>
    }
    return <div data-test="comp-gussed-words">
        {content}
    </div>
}

GuessWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessWords;