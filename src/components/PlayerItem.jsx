import React from "react";
import jeank1 from "../assets/equipe/jeank (1).png";
import tom1 from "../assets/equipe/tom (1).png";
import fode1 from "../assets/equipe/fode (1).png";
import amine1 from "../assets/equipe/amine (1).png";
import dimitri1 from "../assets/equipe/dimitri (1).png";
import felicien1 from "../assets/equipe/felicien (1).png";
import francois1 from "../assets/equipe/francois (1).png";
import idrice1 from "../assets/equipe/idrice (1).png";
import jean1 from "../assets/equipe/jean (1).png";
import jj1 from "../assets/equipe/jj (1).png";
import love1 from "../assets/equipe/love (1).png";
import pilou1 from "../assets/equipe/pilou (1).png";
import quentin1 from "../assets/equipe/quentin (1).png";
import teacher1 from "../assets/equipe/teacher (1).png";
import toussaint1 from "../assets/equipe/toussaint (1).png";
import "./playerItem.css";

const PlayerItem = ({ theme, player, handleClick }) => {
  const { name, image1 } = player;
  const pictures = {
    jeank1: jeank1,
    tom1: tom1,
    fode1: fode1,
    amine1: amine1,
    dimitri1: dimitri1,
    felicien1: felicien1,
    francois1: francois1,
    idrice1: idrice1,
    jean1: jean1,
    jj1: jj1,
    love1: love1,
    pilou1: pilou1,
    quentin1: quentin1,
    teacher1: teacher1,
    toussaint1: toussaint1,
  };
  return (
    <div className={`player-item ${theme}`} onClick={() => handleClick(player)}>
      <div className="photo">
        <img src={pictures[image1]} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default PlayerItem;
