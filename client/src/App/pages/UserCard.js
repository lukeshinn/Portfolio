import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const UserCard = (props) => {
  const { user } = props;

  let deleteUser = async (e) => {
    try {
      let res = await fetch("/api/user/", {
        method: "DELETE",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          id: user.id,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="user-card">
      <h1>The user card! {user.name}</h1>
      {/* TODO: */}
      {/* why cant I call this onclick without an arrow function */}
      <div onClick={() => deleteUser()}>
        <AiFillCloseSquare />
      </div>
    </div>
  );
};

export default UserCard;
