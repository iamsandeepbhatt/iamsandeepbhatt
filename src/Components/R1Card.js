import React from "react";
import "./R1Card.css";
import latestRecords from "../latestRecords.json";

export default function R1Card() {
  return (
    <>
      {latestRecords.map((records) => {
        return (
          <>
            <div className="R1Card_Box" key={records.id}>
              <a href={records.url} target="_blank" rel="noreferrer">
                <div id="card_img">
                  <img src={records.image} alt="img1" id="card_img1" />
                </div>
                <div id="card_title">{records.title}</div>
              </a>
            </div>
          </>
        );
      })}
    </>
  );
}
