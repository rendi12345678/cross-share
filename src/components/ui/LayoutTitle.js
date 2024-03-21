import React from "react";

function LayoutTitle({ title }) {
  return (
    <div className="layout-title">
      <h1>{title}</h1>
      <figure className="user-profile">
        <figcaption className="name">Rendi Virgantara Setiawan</figcaption>
        <img src="/images/rendi1.png" alt="User Profile" />
      </figure>
    </div>
  );
}

export default LayoutTitle;
