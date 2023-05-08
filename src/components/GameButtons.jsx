import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { dice1, dice2, dice3, dice4, dice5, dice6 } from "../assets/images";
const GameButtons = ({
    randomNum,
    diceRoll,
    newGame,
    handlePlayerHold,
    target,
    setTarget,
}) => {
    // console.log(randomNum);
    // console.log(diceRoll());

    return (
        <div className="game_b_container">
            <button className="new_game" onClick={() => newGame()}>
                New Game
            </button>
            <div className="img_container">
                <img
                    className="dice_img"
                    src={
                        randomNum === 1
                            ? dice1
                            : randomNum === 2
                            ? dice2
                            : randomNum === 3
                            ? dice3
                            : randomNum === 4
                            ? dice4
                            : randomNum === 5
                            ? dice5
                            : randomNum === 6
                            ? dice6
                            : null
                    }
                    alt="dice-img"
                />
            </div>
            <span className="roll">
                <GiPerspectiveDiceSixFacesRandom onClick={() => diceRoll()} />
            </span>
            <button className="hold" onClick={() => handlePlayerHold()}>
                Hold
            </button>
            <div className="target_score">
                <p className="select_score_txt">select target score</p>
                <div className="score-selection">
                    <fieldset>
                        <label htmlFor="winningScore0">50 </label>
                        <input
                            // id="winningScore0"
                            type="radio"
                            checked={target === "50"}
                            // name="winningScore"
                            value="50"
                            onChange={(e) => {
                                const { value } = e.target;
                                setTarget(value);
                            }}
                        />

                        <label htmlFor="winningScore1">100</label>
                        <input
                            // id="winningScore1"
                            type="radio"
                            checked={target === "100"}
                            // name="winningScore"
                            value="100"
                            onChange={(e) => {
                                const { value } = e.target;
                                setTarget(value);
                            }}
                        />
                    </fieldset>
                    <p className="author">Stevitech ©</p>
                </div>
            </div>
        </div>
    );
};

export default GameButtons;
