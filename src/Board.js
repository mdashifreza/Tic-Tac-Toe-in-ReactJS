import React, { useState } from 'react';
import Square from './Square';
export default function Board() {

    const rowStyle = {
        display: 'flex'
    }

    const boardStyle = {
        'backgroundColor': '#eee',
        'width': '208px',
        'alignItems': 'center',
        'justifyContent': 'center',
        'display': 'flex',
        'flexDirection': 'column',
        'border': '3px #eee solid'
    }

    const containerStyle = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'column'
    }

    const instructionsStyle = {
        'marginTop': '5px',
        'marginBottom': '5px',
        'fontWeight': 'bold',
        'fontSize': '16px',
    }

    const buttonStyle = {
        'marginTop': '15px',
        'marginBottom': '16px',
        'width': '80px',
        'height': '40px',
        'backgroundColor': '#8acaca',
        'color': 'white',
        'fontSize': '16px',
    }

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);

    const handleClick = (index) => {
        if (squares[index] || winner) return alert(`Player ${winner} Wins the game, Press Reset to Restart the Game`);

        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? 'X' : '0';

        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const renderSquare = (index) => {
        return (
            <Square
                value={squares[index]}
                onClick={() => handleClick(index)}
            />
        )
    }

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    }
    else {
        status = `Next Player: ${xIsNext ? 'X' : '0'}`;
    }


    const handleReset = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null
    }

    return (
        <div>
            <div style={containerStyle} className="gameBoard">
                <div id="statusArea" className="status" style={instructionsStyle}>{status}</div>
                <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{winner}</span></div>
                <button style={buttonStyle} onClick={handleReset}>Reset</button>
                <div style={boardStyle}>
                    <div className="board-row" style={rowStyle}>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row" style={rowStyle}>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row" style={rowStyle}>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
            </div>
        </div>
    )
}
