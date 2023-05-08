import React, { useEffect, useState } from "react";
import GameButtons from "./GameButtons";

const PlayerCard = () => {
    const [currentPlayer, setCurrentPlayer] = useState("player1");
    const [result, setResult] = useState(0);
    const [target, setTarget] = useState("100");
    const [winner, setWinner] = useState("");
    const [p1score, setP1score] = useState({
        currentScore: 0,
        playerScore: 0,
    });
    const [p2score, setP2score] = useState({
        currentScore: 0,
        playerScore: 0,
    });
    const randomNum = Math.floor(Math.random() * 6) + 1;

    const diceRoll = () => {
        if (currentPlayer) {
            const result = randomNum;
            setResult(result);
            if (result > 1) {
                if (currentPlayer === "player1") {
                    setP1score((prev) => ({
                        ...prev,
                        currentScore: prev.currentScore + result,
                    }));
                } else if (currentPlayer === "player2") {
                    setP2score((prev) => ({
                        ...prev,
                        currentScore: prev.currentScore + result,
                    }));
                } else {
                    throw Error("Player out of reach!.");
                }
            } else {
                if (currentPlayer === "player1") {
                    setP1score((prev) => ({
                        ...prev,
                        currentScore: 0,
                    }));
                } else if (currentPlayer === "player2") {
                    setP2score((prev) => ({
                        ...prev,
                        currentScore: 0,
                    }));
                } else {
                    throw Error("Player out of reach!.");
                }
                setCurrentPlayer((prev) =>
                    prev === "player1" ? "player2" : "player1"
                );
            }
        }
    };

    const handlePlayerHold = () => {
        setCurrentPlayer((prev) => (prev === "player1" ? "player2" : "player1"));
        if (currentPlayer === "player1") {
            setP1score((prev) => ({
                ...prev,
                playerScore: prev.playerScore + prev.currentScore,
                currentScore: 0,
            }));
        } else if (currentPlayer === "player2") {
            setP2score((prev) => ({
                ...prev,
                playerScore: prev.playerScore + prev.currentScore,
                currentScore: 0,
            }));
        } else {
            throw Error("Player out of reach!.");
        }
    };

    useEffect(() => {
        if (p1score.playerScore >= Number(target)) {
            setWinner("player1");
            setResult(0);
            setCurrentPlayer("");

            setTimeout(() => console.log(`${winner} won`), 3000);
        } else if (p2score.playerScore >= Number(target)) {
            setCurrentPlayer("");
            setWinner("player2");
            setResult(0);
            setTimeout(() => console.log(`${winner} won`), 3000);
        }
    }, [p1score, p2score, target, winner]);

    const newGame = () => {
        setCurrentPlayer(winner === "player1" ? "player2" : "player1");
        setP1score({
            currentScore: 0,
            playerScore: 0,
        });
        setP2score({
            currentScore: 0,
            playerScore: 0,
        });
        setWinner("");
        setResult(0);
    };

    return (
        <div className="player_container">
            <div className="player_wrapper">
                <div
                    className={
                        currentPlayer === "player1" ? "p1_card active" : "p1_card"
                    }
                >
                    <h1 className="p_card_title">
                        {winner === "player1" ? "winner🏆" : "player1"}
                    </h1>
                    <p className="p_card_score">{p1score.playerScore}</p>
                    <div className="current_score">
                        <p className="current_score_txt">Current Score</p>
                        <p className="current_score_nr">{p1score.currentScore}</p>
                    </div>
                </div>
                <div
                    className={
                        currentPlayer === "player2" ? "p2_card active" : "p2_card"
                    }
                >
                    <h1 className="p_card_title">
                        {winner === "player2" ? "winner🏆" : "player2"}
                    </h1>
                    <p className="p_card_score">{p2score.playerScore}</p>
                    <div className="current_score">
                        <p className="current_score_txt">Current Score</p>
                        <p className="current_score_nr">{p2score.currentScore}</p>
                    </div>
                </div>
            </div>
            <div>
                <GameButtons
                    randomNum={randomNum}
                    diceRoll={diceRoll}
                    newGame={newGame}
                    handlePlayerHold={handlePlayerHold}
                    setTarget={setTarget}
                    target={target}
                />
            </div>
        </div>
    );
};

export default PlayerCard;
