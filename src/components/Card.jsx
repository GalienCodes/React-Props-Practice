import React from "react";

function Card(propos) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{propos.name}</h2>
          <img className="circle-img " src={propos.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{propos.tel}</p>
          <p className="info">{propos.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
