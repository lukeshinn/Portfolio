import React, { useState, useEffect } from "react";
import { AiFillCloseSquare } from "react-icons/ai";

const UserCard = ({ users, deleteUser }) => {
  return (
    <div class="user-card">
      {/* <h1>The user card! {user.name}</h1> */}
      {/* TODO: */}
      {/* why cant I call this onclick without an arrow function */}
      {/* <div onClick={() => deleteUser()}>
        <AiFillCloseSquare />
      </div> */}

      {users.map((user, index) => {
        return (
          <>
            <div class="user" key={index}>
              {user.name}
              <div onClick={() => deleteUser(user)}>
                <AiFillCloseSquare />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserCard;
