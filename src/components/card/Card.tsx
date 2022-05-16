import React, { CSSProperties, useState } from "react";
import "./Card.scss";
import { Card as CardComponent } from "react-bootstrap";
import { CardProps } from "../../utils/types/types";
import { imgs, path } from "../../assets/pictures/pictures";
import { calendarIconStyle, nearEndStyle } from "../../utils/style/style";

function Card({ game, setSelectedGames }: CardProps): JSX.Element {
  const i = Math.floor(Math.random() * imgs.length);

  const [image] = useState(`${path + imgs[i]}.png`);
  const [startDate] = useState(new Date(game.start_at));
  const [finishDate] = useState(new Date(game.finish_at));
  const [isSelected, setIsSelected] = useState(false);

  const cardStyle: CSSProperties = {
    width: "17rem",
    border: "none",
    outline: isSelected ? "3px solid blue" : "none",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  };

  const statusStyle: CSSProperties = {
    background:
      game.state === 3
        ? "hsl(224deg 68% 42%)"
        : game.state === 2
        ? "hsl(30deg 90% 51%)"
        : "hsl(104deg 49% 49%)",
    padding: "2px",
    color: "white",
    fontSize: "11px",
    width: "100px",
    borderRadius: "5px",
    position: "absolute",
    fontWeight: "bold",
    right: "20px",
    top: "-5px",
  };

  return (
    <CardComponent
      onClick={() => {
        setSelectedGames((selectedGames) =>
          !isSelected ? selectedGames + 1 : selectedGames - 1
        );
        setIsSelected(!isSelected);
      }}
      style={cardStyle}
    >
      <span style={statusStyle}>
        {game.state === 2
          ? "En attente"
          : game.state === 3
          ? "Terminé"
          : "En ligne"}
      </span>
      <div className="img">
        <CardComponent.Img
          style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
          variant="top"
          src={image}
        />
      </div>
      <CardComponent.Body>
        <div className="cardHeader">
          <img src={`PICTO JEUX/${game.template}.png`} alt="" />
          <CardComponent.Title>{game.title}</CardComponent.Title>
        </div>
        <CardComponent.Text>
          <div className="card-info">
            <div className="players">
              <i
                style={{ transform: "scale(0.8)", width: "100%" }}
                className="fa-regular fa-user"
              />
              <p>{game.players}</p>
            </div>
            <div className="progression">
              <i
                style={{ transform: "scale(0.8)" }}
                className="fa-solid fa-recycle"
              />
              <p>100%</p>
            </div>
          </div>
          <i
            style={calendarIconStyle}
            className="fa-regular fa-calendar-days"
          />
          <p style={{ fontSize: "10px", margin: 0 }}>
            Du {startDate.toLocaleDateString()} à{" "}
            {startDate.toLocaleTimeString().replace(":", "h").split(":")[0]} au{" "}
            {finishDate.toLocaleDateString()} à{" "}
            {finishDate.toLocaleTimeString().replace(":", "h").split(":")[0]}
          </p>
        </CardComponent.Text>
      </CardComponent.Body>
      {game.state === 9 && (
        <span style={nearEndStyle}>
          <p>Votre opération se termine dans 2 jours</p>
        </span>
      )}
    </CardComponent>
  );
}

export default Card;
