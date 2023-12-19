import React from "react";
import jeank2 from "../assets/equipe/jeank (2).png";
import tom2 from "../assets/equipe/tom (2).png";
import fode2 from "../assets/equipe/fode (2).png";
import amine2 from "../assets/equipe/amine (2).png";
import dimitri2 from "../assets/equipe/dimitri (2).png";
import felicien2 from "../assets/equipe/felicien (2).png";
import francois2 from "../assets/equipe/francois (2).png";
import idrice2 from "../assets/equipe/idrice (2).png";
import jean2 from "../assets/equipe/jean (2).png";
import jj2 from "../assets/equipe/jj (2).png";
import love2 from "../assets/equipe/love (2).png";
import pilou2 from "../assets/equipe/pilou (2).png";
import quentin2 from "../assets/equipe/quentin (2).png";
import teacher2 from "../assets/equipe/teacher (2).png";
import toussaint2 from "../assets/equipe/toussaint (2).png";
import "./playerDetails.css";

const PlayerDetails = ({ theme, player, handleBackClick }) => {
  const {
    name,
    age,
    placeOfBirth,
    codingStrengths,
    codingWeakness,
    biggestAchievement,
    interesting,
    image2,
  } = player;
  const pictures = {
    jeank2: jeank2,
    tom2: tom2,
    fode2: fode2,
    amine2: amine2,
    dimitri2: dimitri2,
    felicien2: felicien2,
    francois2: francois2,
    idrice2: idrice2,
    jean2: jean2,
    jj2: jj2,
    love2: love2,
    pilou2: pilou2,
    quentin2: quentin2,
    teacher2: teacher2,
    toussaint2: toussaint2,
  };
  return (
    <div className={`player-details ${theme}`}>
      <div className="player">
        <div className="details">
          <h1>
            Name : <span>{player.name}</span>
          </h1>
          <h2>
            Age : <span>{player.age}</span>
          </h2>
          <h2>
            Place of Birth : <span>{player.placeOfBirth}</span>
          </h2>
          <h2>
            Coding Strengths : <span>{player.codingStrengths}</span>
          </h2>
          <h2>
            Coding Weakness : <span>{player.codingWeakness}</span>
          </h2>
          <p>
            Biggest Achievement : <span>{player.biggestAchievement}</span>
          </p>
          <h2>
            Interesting : <span> {player.interesting} </span>
          </h2>
        </div>
        <div className="picture">
          <img src={pictures[image2]} alt={player.name} />
        </div>
      </div>
      <div className="back">
        <button onClick={() => handleBackClick()}>Back</button>
      </div>
    </div>
  );
};

export default PlayerDetails;
