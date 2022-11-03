// import React from "react";
// import "./R2Card.css";

// export default function R2Card(props) {
//   return (
//     <>
//       <div id="card">
//         <div id="card_img">
//           <img src={require("./../images/thumb2.jpeg")} alt="my_iamge" />
//         </div>
//         <div id="card_title">
//           <h3>{props.title}</h3>
//         </div>
//         <div id="card_desc">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s.
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./R2Card.css";
import latestRecords from "../latestRecords.json";

export default function R1Card() {
  return (
    <>
      {latestRecords.map((records) => {
        return (
          <>
            <div className="R2Card_Box" key={records.id}>
              <a href={records.url} target="_blank" rel="noreferrer">
                <div id="card_img">
                  <img src={records.image} alt="img1" id="card_img1" />
                </div>
                <div id="card_title">{records.title}</div>
                <div id="card_desc">{records.desc}</div>
              </a>
            </div>
          </>
        );
      })}
    </>
  );
}
