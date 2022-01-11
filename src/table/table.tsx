import React, { useEffect, useState } from 'react';

import './../App.css';


function Table() {
    let [scores, setScores] = useState<any>([{ player: {}, match: {} }]);

    useEffect(() => {
        fetch('scores.json')
            .then(response => response.json())
            .then(data => {
                let d = []
                for (let i = 0; i < data.length; i = i + 2) {
                    d.push({
                        player: data[i],
                        match: data[i + 1]
                    })
                }
                setScores(d);
            });
    }, []);
    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>
                            Market
                        </th>
                        <th>
                            Player
                        </th>
                        <th>
                            Match
                        </th>
                        <th>
                            Books
                        </th>
                        <th>
                            N.Points/Assist
                        </th>
                        <th>
                            Odds Over
                        </th>
                        <th>
                            Odds Under
                        </th>
                        <th>
                            Highest Over
                        </th>
                        <th>
                            Highest Under
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {scores.map((score: any, i: number) => (
                        <tr key={i}>
                            <td>Points</td>
                            <td>{score.player.name}</td>
                            <td>{score.match.name}</td>
                            <td>{score.player.books}</td>
                            <td>{score.player.market1}</td>
                            <td>{score.player.over}</td>
                            <td>{score.player.under}</td>
                            <td>Bet365</td>
                            <td>eurobet</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
