import React from 'react';
import PropTypes from 'prop-types';


const GuessWords = props => {
    let content;
    if (props.guessedWords.length === 0) {
        content = <span data-test="guess-instructions">
            Try to guess something
        </span>
    } else {
        content = <div data-test='gussed-words'>
            <h3>Guessed Word</h3>
            <table>
                <thead>
                    <th>Guess</th>
                    <th>Matching letters</th>
                </thead>
                <tbody>
                    {
                        props.guessedWords.map((guessedWord, i) => <tr key={i} data-test="gussed-word">
                            <td>{guessedWord.guessedWord}</td>
                            <td>{guessedWord.letterMatchCount}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div >
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