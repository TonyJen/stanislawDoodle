import React, { useState } from 'react';

const BattleOfTheSexes = () => {
    const [highlight, setHighlight] = useState('');

    const playGame = () => {
        const player1Strategy = Math.random() < 0.5 ? "Opera" : "Football";
        const player2Strategy = Math.random() < 0.5 ? "Opera" : "Football";

        let payoff;
        if (player1Strategy === "Opera" && player2Strategy === "Opera") {
            payoff = "(2,1)";
        } else if (player1Strategy === "Football" && player2Strategy === "Football") {
            payoff = "(1,2)";
        } else {
            payoff = "(0,0)";
        }

        setHighlight(payoff);
    }

    return (
        <div>
            <h2>Battle of the Sexes</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Opera</th>
                        <th>Football</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Opera</th>
                        <td style={{backgroundColor: highlight === '(2,1)' ? 'yellow' : ''}}>(2,1)</td>
                        <td style={{backgroundColor: highlight === '(0,0)' ? 'yellow' : ''}}>(0,0)</td>
                    </tr>
                    <tr>
                        <th>Football</th>
                        <td style={{backgroundColor: highlight === '(0,0)' ? 'yellow' : ''}}>(0,0)</td>
                        <td style={{backgroundColor: highlight === '(1,2)' ? 'yellow' : ''}}>(1,2)</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={playGame}>Play Game</button>
        </div>
    );
}

export default BattleOfTheSexes;