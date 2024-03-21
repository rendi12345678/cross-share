import React from "react";

function Item({ title, reactions, comments, shared }) {
  return (
    <li>
      <video src="/videos/vid1.mp4"></video>
      <div className="details">
        <h4>{title}</h4>
        <span>300.000 x ditonton</span>
        <div>
          <p>Reactions : {reactions}</p>
          <p>Comments : {comments}</p>
          <p>Shared : {shared}</p>
        </div>
        <figure className="channel-profile">
          <img src="/images/rendi1.png" alt="channel profile" />
          <figcaption>Coding Knowledge</figcaption>
        </figure>
        <div className="date">
          <h5>19 Maret 2024</h5>
        </div>
      </div>
    </li>
  );
}

export default Item;
