import React from "react";

function Person({ name, email, phone, img, onClick, location }) {
  return (
    <div>
      <img style={{ borderRadius: "9999px" }} src={img} alt="" />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{location}</p>
      <button style={{ borderRadius: "8px" }} onClick={onClick}>
        Get Random User
      </button>
    </div>
  );
}

export default Person;
